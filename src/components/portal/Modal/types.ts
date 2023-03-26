import { ReactNode } from 'react';
export interface ModalProps {
  isOpened: boolean;
  closeOnClickInOverlay?: boolean;
  containerId?: string;
  hasOverlay?: boolean;
  zIndexModal?: number;
  children: ReactNode;
}
