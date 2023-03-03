import { MouseEventHandler, ReactElement } from 'react';
import { LinkTarget } from '../../shared/LinkTarget';

export interface IconButtonProps {
  size?: number;
  color?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  to?: string;
  linkTarget?: LinkTarget;
  children: ReactElement;
}
