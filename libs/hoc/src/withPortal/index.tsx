import { isNull } from 'lodash-es';
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

interface WithPortalProps {
  node?: Element | null;
  targetId?: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isDimBlocked?: boolean;
  children: ReactNode;
}

const WithPortal = ({
  targetId = 'LayersContainer',
  children,
  node,
  isOpen,
  setIsOpen,
  isDimBlocked = false,
}: WithPortalProps) => {
  const [didMounted, setDidMounted] = useState(false);

  useEffect(() => {
    setDidMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const detectedTargetNode = node ?? document.getElementById(targetId);

  if (isNull(detectedTargetNode)) {
    return null;
  }

  return didMounted
    ? createPortal(
        <section
          id="backgroundHolder"
          onClick={(event) => {
            if (!isDimBlocked && (event.target as HTMLDivElement).id) {
              setIsOpen(false);
            }
          }}
        >
          {children}
        </section>,
        detectedTargetNode,
      )
    : null;
};

export { WithPortal };
export type { WithPortalProps };
