import React from 'react';

import { Overlay } from '../Overlay';

import { ModalProps } from './types';
import * as S from './styles';
import { ReactPortal } from '../ReactPortal';

export const Modal: React.FC<ModalProps> = ({ containerId = 'modal-root', hasOverlay = true, onClickInOverlay, children }) => {
  const OverlayWrapper = hasOverlay ? Overlay : React.Fragment;

  return (
    <ReactPortal containerId={containerId}>
      <OverlayWrapper onClick={onClickInOverlay}>
        <S.Container>
          <S.Modal>
            {children}
          </S.Modal>
        </S.Container>
      </OverlayWrapper>
    </ReactPortal>
  );
};
