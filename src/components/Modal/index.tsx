import React from 'react';

import { Overlay } from '../Overlay';
import { ReactPortal } from '../ReactPortal';

import { ModalProps } from './types';
import * as S from './styles';

export const Modal: React.FC<ModalProps> = ({ isOpened, containerId = 'modal-root', hasOverlay = true, zIndexModal, children }) => {
  if(!isOpened) {
    return null;
  }

  const OverlayWrapper = hasOverlay ? Overlay : React.Fragment;

  return (
    <ReactPortal containerId={containerId}>
      <OverlayWrapper zIndex={zIndexModal}>
        <S.Container>
          <S.Modal>
            {children}
          </S.Modal>
        </S.Container>
      </OverlayWrapper>
    </ReactPortal>
  );
};
