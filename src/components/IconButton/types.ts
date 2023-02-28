import { MouseEventHandler, ReactNode } from 'react';

export interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}
