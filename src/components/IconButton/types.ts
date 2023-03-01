import { MouseEventHandler, ReactElement } from 'react';
import { DynamicLinkLogicTarget } from '../shared/DynamicLinkLogic/types';

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
  target?: DynamicLinkLogicTarget;
  children: ReactElement;
}
