import stylex from '@stylexjs/stylex';
import { position } from 'polished';

export const withPortalStyles = stylex.create({
  container: {
    position: 'fixed',
    ...position(0, 0, 0, 0),
  },
  background: {
    backgroundColor: '#191B2380',
    width: '100vw',
    height: '100vh',
  },
});
