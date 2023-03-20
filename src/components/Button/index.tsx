import { ClickableScale } from '../shared/ClickableScale';
import { LinkTarget, targetMapper } from '../../shared/LinkTarget';
import { Loading } from '../Loading';

import { ButtonProps } from './types';
import * as S from './styles';

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  variant,
  danger,
  disabled,
  isLoading,
  width,
  height = '4.6rem',
  onClick,
  to,
  children
}) => {
  if(['button', 'submit'].includes(type) || to === undefined) {
    return (
      <ClickableScale disabled={disabled || isLoading}>
        <S.ButtonStyled
          type={type as 'button' | 'submit'}
          variant={variant}
          danger={danger}
          disabled={disabled || isLoading}
          isLoading={isLoading}
          width={width}
          height={height}
          onClick={onClick}
        >
          <div className="content-container">
            {children}
          </div>
          {isLoading && (
            <div className="loading-container">
              <Loading />
            </div>
          )}
        </S.ButtonStyled>
      </ClickableScale>
    );
  }

  return (
    <ClickableScale disabled={disabled || isLoading}>
      <S.LinkStyled
        type={type}
        variant={variant}
        danger={danger}
        disabled={disabled || isLoading}
        isLoading={isLoading}
        width={width}
        height={height}
        onClick={onClick}
        to={to}
        target={targetMapper[type as LinkTarget]}
      >
        <div className="content-container">
          {children}
        </div>
        {isLoading && (
          <div className="loading-container">
            <Loading />
          </div>
        )}
      </S.LinkStyled>
    </ClickableScale>
  );
};
