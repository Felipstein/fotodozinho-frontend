import { IconButtonProps } from './types';
import * as S from './styles';

export const IconButton: React.FC<IconButtonProps> = ({ onClick ,children }) => {

  return (
    <S.ButtonStyled
      onClick={onClick}
    >
      {children}
    </S.ButtonStyled>
  );
};
