import { DynamicLinkLogicTarget } from '../shared/DynamicLinkLogic/types';

export interface LabelButtonProps {
  to: string;
  target?: DynamicLinkLogicTarget;
  children: string;
}
