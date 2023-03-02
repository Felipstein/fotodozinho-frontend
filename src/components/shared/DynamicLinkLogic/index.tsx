import { DynamicLinkLogicProps, DynamicLinkLogicTarget } from './types';
import * as S from './styles';

const targetMapper: Record<DynamicLinkLogicTarget, React.HTMLAttributeAnchorTarget> = {
  navigate: '',
  redirect: '_self',
  redirect_to_new_page: '_blank',
};

export const DynamicLinkLogic: React.FC<DynamicLinkLogicProps> = ({ to, target = 'navigate', children }) => {
  if(target === 'navigate') {
    return (
      <S.ResetLinkStyled to={to}>
        {children}
      </S.ResetLinkStyled>
    );
  }

  return (
    <S.ResetLinkStyled to={to} target={targetMapper[target]} rel='noopener noreferrer'>
      {children}
    </S.ResetLinkStyled>
  );
};
