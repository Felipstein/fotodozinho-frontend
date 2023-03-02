import { LabelButtonProps } from './types';
import * as S from './styles';
import { targetMapper } from '../../shared/LinkTarget';

export const LabelButton: React.FC<LabelButtonProps> = ({ to, linkTarget = 'navigate', children }) => {
  if(linkTarget === 'navigate') {
    return (
      <S.LinkStyled to={to}>
        {children}
      </S.LinkStyled>
    );
  }

  return (
    <S.LinkStyled to={to} target={targetMapper[linkTarget]} rel='noopener noreferrer'>
      {children}
    </S.LinkStyled>
  );
};
