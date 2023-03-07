import { ReactNode } from 'react';

export interface OverlayProps {
  zIndex?: number;
  onClick?: () => void;
  children: ReactNode;
}
