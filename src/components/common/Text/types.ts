import { HTMLAttributes, ReactNode } from 'react';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  size?: 'xlg' | 'lg' | 'md' | 'sm' | 'xsm';
  children: ReactNode;
  weight?: number | string;
}
