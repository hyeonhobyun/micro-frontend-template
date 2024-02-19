import stylex from '@stylexjs/stylex';
import { ReactNode } from 'react';

const styles = stylex.create({
  base: {
    fontSize: '48px',
    lineHeight: '50px',
    color: 'blue',
  },
  highlighted: {
    color: 'red',
    margin: '10px 12px 11px 5px',
  },
});

const styles2 = stylex.create({
  asdf: {
    color: 'red',
    margin: '10px 12px 11px 5px',
    fontSize: '24px',
  },
});

interface TextProps {
  children: ReactNode;
}

const Text = ({ children }: TextProps) => {
  return <b className={stylex(styles.base, styles.highlighted)}>{children}</b>;
};

const Text2 = ({ children }: TextProps) => {
  return <span className={stylex(styles2.asdf)}>{children}</span>;
};

export { Text, Text2 };
