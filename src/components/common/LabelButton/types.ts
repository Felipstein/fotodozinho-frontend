import { ReactNode } from 'react';
import { LinkTarget } from '../../../shared/LinkTarget';

export interface LabelButtonProps {
  isBlueVariant?: boolean;
  to?: string;
  linkTarget?: LinkTarget;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  isDisabled?: boolean;
  isLoading?: boolean;
  children: ReactNode;
}
