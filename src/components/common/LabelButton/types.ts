import { LinkTarget } from '../../../shared/LinkTarget';

export interface LabelButtonProps {
  isBlueVariant?: boolean;
  to?: string;
  linkTarget?: LinkTarget;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children: string;
}
