import { ClickableScale } from '../shared/ClickableScale';
import { Loading } from '../Loading';

import { ButtonProps } from './types';
import * as S from './styles';
import { LinkTarget, targetMapper } from '../../shared/LinkTarget';

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  variant,
  danger,
  disabled,
  loading,
  width,
  height = '4.6rem',
  onClick,
  to,
  children
}) => {
  if(['button', 'submit'].includes(type) || to === undefined) {
    return (
      <ClickableScale disabled={disabled || loading}>
        <S.ButtonStyled
          type={type as 'button' | 'submit'}
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
  }

  return (
    <ClickableScale disabled={disabled || loading}>
      <S.LinkStyled
        type={type}
        variant={variant}
        danger={danger}
        disabled={disabled || loading}
        loading={loading}
        width={width}
        height={height}
        onClick={onClick}
        to={to}
        target={targetMapper[type as LinkTarget]}
      >
        <div className="content-container">
          {children}
        </div>
        {loading && (
          <div className="loading-container">
            <Loading />
          </div>
        )}
      </S.LinkStyled>
    </ClickableScale>
  );
};
