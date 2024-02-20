import { defineVars } from '@stylexjs/stylex';
import { margin } from 'polished';

export const modalVars = defineVars({
  container: {
    position: 'fixed',
    top: '0',
    left: '0',
  },
  children: {
    // 가운데 정렬
    width: 'fit-content',
    ...margin(0, 'auto'),
  },
  background: {
    backgroundColor: '#191B2380',
    width: '100vw',
    height: '100vh',
  },
});
