export type LinkTarget = 'navigate' | 'redirect' | 'redirect_to_new_page';

export const targetMapper: Record<LinkTarget, React.HTMLAttributeAnchorTarget> = {
  navigate: '',
  redirect: '_self',
  redirect_to_new_page: '_blank',
};
