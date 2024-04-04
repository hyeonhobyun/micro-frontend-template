import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
  /* Primary Color */
  blue100: '#EEF1F4',
  blue200: '#EFF5FF',
  blue300: '#E6F7FF',
  blue400: '#BAE7FF',
  blue500: '#91D5FF',
  blue600: '#69C0FF',
  blue700: '#40A9FF',
  blue800: '#0094FF', // main color
  blue900: '#0078FF',

  /* Secondary Color */
  green100: '#EFFFEE',
  green200: '#76D672',
  green300: '#34BC4A',
  red100: '#FFF3F3',
  red200: '#FC5555',
  purple: '#7B61FF',
  bluegreen: '#13C097',
  orange: '#FF9737',

  /* GrayScale Color */
  gray100: '#FFFFFF',
  gray200: '#F7F8FA',
  gray300: '#E1E4E7',
  gray400: '#D5D7DC',
  gray500: '#91949F',
  gray600: '#707783',
  gray700: '#3C4253',
  gray800: '#2A2D3B',
  gray900: '#191B23',

  /* Dim Color */
  dim20: '#191B2333',
  dim50: '#191B2380',
  dim80: '#191B23CC',

  /* Sementic Color */
  bg_default: '#F7F8FA',
  bg_modal: '#FFFFFF',
  bg_snackbar: '#000000CC',
  bg_divider: '#D5D7DC',
  bg_input: '#FFFFFF',
  border: '#E1E4E7',
  text_default: '#191B23',
  text_main: '#3C4253',
  text_sub: '#707783',
});

export const gradients = stylex.defineVars({
  blue: '125deg, #0094FF 29.34%, #0047FF 99.78%',
  purple: '118deg, #7B61FF 32.88%, #5724E9 107.25%',
  green: '119deg, #35CB85 32.36%, #19D27A 103.17%',
});
export type IGradients = keyof typeof gradients;

export const spacings = stylex.defineVars({
  s2: '2px',
  s4: '4px',
  s6: '6px',
  s8: '8px',
  s10: '10px',
  s12: '12px',
  s16: '16px',
  s20: '20px',
  s32: '32px',
  s40: '40px',
});

export const fonts = stylex.create({
  bodyM16: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '150%',
    letterSpacing: -0.32,
  },
  bodyM14: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '150%',
    letterSpacing: -0.28,
  },
});
