export type CustomLabelButtonTarget = 'navigate' | 'redirect' | 'redirect_to_new_page';

export interface LabelButtonProps {
  to: string;
  target?: CustomLabelButtonTarget;
  children: string;
}
