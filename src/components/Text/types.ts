import { ReactNode } from 'react';

export interface TextProps {
  asChild?: boolean;
  size?: 'lg' | 'md' | 'sm' | 'xsm' | 'xxsm' | 'xxxsm';
  children: ReactNode;
}
