import { ReactNode } from 'react';

export type ButtonVariants = 'primary' | 'secondary';

export interface ButtonProps {
  type?: 'button' | 'submit';
  variant?: ButtonVariants;
  danger?: boolean;
  disabled?: boolean;
  children: ReactNode;
}
