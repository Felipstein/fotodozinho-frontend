import { LabelButtonProps } from './types';
import * as S from './styles';

export const LabelButton: React.FC<LabelButtonProps> = ({ to, target = 'navigate', children }) => {
  return (
    <S.LinkStyled to={to} target={target}>
      {children}
    </S.LinkStyled>
  );
};
