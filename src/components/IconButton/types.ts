import { MouseEventHandler, ReactElement } from 'react';

export interface IconButtonProps {
  size?: number;
  customStyles?: {
    color?: string;
    colorPressed?: string;
    backgroundColorHovered?: string;
    backgroundColorPressed?: string;
  };
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactElement;
}
