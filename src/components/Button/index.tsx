import { ClickableScale } from '../shared/ClickableScale';

import { ButtonProps } from './types';
import * as S from './styles';

export const Button: React.FC<ButtonProps> = ({ type, variant, danger, disabled, onClick, children }) => {
  return (
    <ClickableScale>
      <S.ButtonStyled
        type={type}
        variant={variant}
        danger={danger}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </S.ButtonStyled>
    </ClickableScale>
  );
};
