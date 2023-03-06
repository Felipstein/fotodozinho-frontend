import { useEffect } from 'react';

import { Overlay } from '../../../../components/Overlay';
import { ReactPortal } from '../../../../components/ReactPortal';

import { TermsModalProps } from './TermsModal/types';

export const TermsModal: React.FC<TermsModalProps> = ({ isOpened }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if(!isOpened) {
    return null;
  }

  return (
    <ReactPortal containerId='modal-root'>
      <Overlay>
        <h1>Oi</h1>
      </Overlay>
    </ReactPortal>
  );
};
