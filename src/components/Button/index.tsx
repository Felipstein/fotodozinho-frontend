import { ButtonProps } from './types';

import * as S from './styles';

export const Button: React.FC<ButtonProps> = ({ type, variant, danger, disabled, onClick, children }) => {
  return (
    <S.ButtonStyled
      type={type}
      variant={variant}
      danger={danger}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </S.ButtonStyled>
  );
};
