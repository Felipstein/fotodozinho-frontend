import { LabelButtonProps } from './types';
import * as S from './styles';
import { targetMapper } from '../../shared/LinkTarget';

export const LabelButton: React.FC<LabelButtonProps> = ({ to, target = 'navigate', children }) => {
  if(target === 'navigate') {
    return (
      <S.LinkStyled to={to}>
        {children}
      </S.LinkStyled>
    );
  }

  return (
    <S.LinkStyled to={to} target={targetMapper[target]} rel='noopener noreferrer'>
      {children}
    </S.LinkStyled>
  );
};
