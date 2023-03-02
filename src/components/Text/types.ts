import { ReactNode } from 'react';

export interface TextProps {
  asChild?: boolean;
  size?: 'xlg' | 'lg' | 'md' | 'sm' | 'xsm';
  children: ReactNode;
  weight?: number | string;
}
