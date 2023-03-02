import { MouseEventHandler, ReactElement } from 'react';
import { LinkTarget } from '../../shared/LinkTarget';

export interface IconButtonProps {
  size?: number;
  customStyles?: {
    color?: string;
    colorPressed?: string;
    backgroundColorHovered?: string;
    backgroundColorPressed?: string;
  };
  onClick?: MouseEventHandler<HTMLButtonElement>;
  to?: string;
  linkTarget?: LinkTarget;
  children: ReactElement;
}
