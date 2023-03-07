import { ReactNode } from 'react';

export interface ModalProps {
  containerId?: string;
  hasOverlay?: boolean;
  onClickInOverlay?: () => void;
  children: ReactNode;
}
