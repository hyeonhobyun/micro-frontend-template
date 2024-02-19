import stylex from '@stylexjs/stylex';
import { modalVars } from 'libs/styles/src/vars/modal.stylex';
import { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <article>
      <section className={stylex(modalVars.children)}>{children}</section>
    </article>
  );
};
