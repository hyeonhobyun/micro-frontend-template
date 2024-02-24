import stylex from '@stylexjs/stylex';

export const withPortalStyles = stylex.create({
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 9999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    backgroundColor: '#191B2380',
    width: '100vw',
    height: '100vh',
  },
  content: {
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
  },
});
