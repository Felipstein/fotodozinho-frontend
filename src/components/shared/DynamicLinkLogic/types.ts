export type DynamicLinkLogicTarget = 'navigate' | 'redirect' | 'redirect_to_new_page';

export interface DynamicLinkLogicProps {
  to: string;
  target?: DynamicLinkLogicTarget;
  children: string;
}
