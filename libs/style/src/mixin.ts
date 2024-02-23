import { CUSTOM_MEDIA_QUERIES } from '@trost/config/src/lib/style';
import { Properties } from 'csstype';
import {
  assign,
  isArray,
  isNumber,
  isObject,
  isString,
  kebabCase,
  merge,
} from 'lodash';
import { StyleObject } from 'styletron-react';

const breakingSpace = (
  propertyName: keyof Properties,
  originalValue: number | string,
  containerValue: number | string,
) => {
  const unit = /font-size|line-height/.test(propertyName) ? 'vw' : '%';

  return isNumber(originalValue) && isNumber(containerValue)
    ? (originalValue / containerValue) * 100 + unit
    : `calc(${originalValue} / ${containerValue} * 100${unit})`;
};

const convertVarFromJSToCSS = (configObj: { [key: string]: string | number }) =>
  Object.entries(configObj).reduce(
    (accu, [key, value]) => accu + `--${kebabCase(key)}:${value};`,
    '',
  );

const mediaQueryValues = Object.values(CUSTOM_MEDIA_QUERIES);

const mediaQuery = (CSSProperties: {
  [key in keyof StyleObject]: StyleObject[key][];
}): StyleObject => {
  const styles = {};

  Object.entries(CSSProperties).forEach(([key, value]) => {
    if (isString(value) || isNumber(value)) {
      assign(styles, { [key]: value });
    } else {
      if (isArray(value)) {
        assign(styles, { [key]: value[0] });
        value.slice(1).forEach((responsiveValue, index) => {
          const selectedMediaQuery = mediaQueryValues[index];

          if (isString(selectedMediaQuery)) {
            merge(styles, {
              [selectedMediaQuery]: {
                [key]: responsiveValue,
              },
            });
          } else {
            console.warn(
              `you overpassed mediaQuery multiple values of it's length limitation. you can just only pass ${mediaQueryValues.length} values.\noverpassed value which is '{[/* undefined mediaQuery about ${key} */]:${responsiveValue}}' will be ignored`,
            );
          }
        });
      } else if (isObject(value)) {
        merge(styles, {
          [key]: mediaQuery(value),
        });
      } else {
        console.error(
          `parseResponsiveStylePair received unexpected value: ${value}`,
        );
      }
    }
  });

  return styles;
};

const ONE_PERCENT_RATIO = 0.01;
const calculateAlternativeViewportUnit = () => {
  /* some mobile browsers have different viewport unit calculation strategy for native ui (controller, scrollbar and etc) */
  document.documentElement.style.setProperty(
    '--1vh-as-px',
    `${window.innerHeight * ONE_PERCENT_RATIO}px`,
  );
  document.documentElement.style.setProperty(
    '--1vw-as-px',
    `${window.innerWidth * ONE_PERCENT_RATIO}px`,
  );
};

// ratio = ((height / width) * 100)
export const aspectRatioPolyfill = (ratio: number): StyleObject => ({
  '::before': {
    float: 'left',
    paddingTop: `${ratio}%`,
    content: '""',
  },
  '::after': {
    display: 'block',
    content: '""',
    clear: 'both',
  },
});
export {
  mediaQuery,
  breakingSpace,
  convertVarFromJSToCSS,
  calculateAlternativeViewportUnit,
};
