import { ButtonProps } from './types';

import * as S from './styles';

export const Button: React.FC<ButtonProps> = ({ type, variant, danger, disabled, children }) => {
  return (
    <S.ButtonStyled
      type={type}
      variant={variant}
      danger={danger}
      disabled={disabled}
    >
      {children}
    </S.ButtonStyled>
  );
};
