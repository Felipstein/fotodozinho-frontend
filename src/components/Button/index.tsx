import { ClickableScale } from '../shared/ClickableScale';

import { ButtonProps } from './types';
import * as S from './styles';
import { Loading } from '../Loading';

export const Button: React.FC<ButtonProps> = ({
  type,
  variant,
  danger,
  disabled,
  loading,
  width,
  height = '4.6rem',
  onClick,
  children
}) => {
  return (
    <ClickableScale disabled={disabled || loading}>
      <S.ButtonStyled
        type={type}
        variant={variant}
        danger={danger}
        disabled={disabled || loading}
        loading={loading}
        width={width}
        height={height}
        onClick={onClick}
      >
        <div className="content-container">
          {children}
        </div>
        {loading && (
          <div className="loading-container">
            <Loading />
          </div>
        )}
      </S.ButtonStyled>
    </ClickableScale>
  );
};
