import { LinkTarget } from '../../shared/LinkTarget';

export interface LabelButtonProps {
  $isBlueVariant?: boolean;
  to: string;
  linkTarget?: LinkTarget;
  children: string;
}
