import stylex from '@stylexjs/stylex';
import { modalStyles } from 'libs/components/src/molecules/modal/container/style';
import { ReactNode } from 'react';

interface ModalContainerProps {
  children: ReactNode;
}

const ModalContainer = ({ children }: ModalContainerProps) => {
  return (
    <article className={stylex(modalStyles.container, modalStyles.background)}>
      {children}
    </article>
  );
};

export { ModalContainer };
export type { ModalContainerProps };
