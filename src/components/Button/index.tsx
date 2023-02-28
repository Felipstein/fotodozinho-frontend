import { ClickableScale } from '../shared/ClickableScale';

import { ButtonProps } from './types';
import * as S from './styles';
import { Loading } from '../Loading';

export const Button: React.FC<ButtonProps> = ({ type, variant, danger, disabled, loading = true, onClick, children }) => {
  return (
    <ClickableScale>
      <S.ButtonStyled
        type={type}
        variant={variant}
        danger={danger}
        disabled={disabled || loading}
        loading={loading}
        onClick={onClick}
      >
        {!loading && children}
        {loading && <Loading />}
      </S.ButtonStyled>
    </ClickableScale>
  );
};
