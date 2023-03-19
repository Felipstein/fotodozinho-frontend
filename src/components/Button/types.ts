import { MouseEventHandler, ReactNode } from 'react';
import { LinkTarget } from '../../shared/LinkTarget';

export type ButtonVariants = 'primary' | 'secondary';

export interface ButtonProps {
  type?: 'button' | 'submit' | LinkTarget;
  variant?: ButtonVariants;
  danger?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  to?: string;
  width?: string;
  height?: string;
  children: ReactNode;
}
