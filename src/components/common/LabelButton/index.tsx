import { targetMapper } from '../../../shared/LinkTarget';

import { LabelButtonProps } from './types';
import * as S from './styles';
import { Loading } from '../Loading';

export const LabelButton: React.FC<LabelButtonProps> = ({
  isBlueVariant = false,
  to,
  linkTarget = 'navigate',
  onClick,
  isDisabled = false,
  isLoading = false,
  children,
}) => {
  if(linkTarget === 'navigate') {
    return (
      <S.LinkStyled
        $isBlueVariant={isBlueVariant}
        to={to || ''}
        onClick={onClick}
        $isDisabled={isDisabled}
        $isLoading={isLoading}
      >
        {children}
        {isLoading && (
          <Loading size={16} />
        )}
      </S.LinkStyled>
    );
  }

  return (
    <S.LinkStyled
      $isBlueVariant={isBlueVariant}
      to={to || ''}
      target={targetMapper[linkTarget]}
      rel='noopener noreferrer'
      onClick={onClick}
      $isDisabled={isDisabled}
      $isLoading={isLoading}
    >
      {children}
      {isLoading && (
        <Loading size={16} />
      )}
    </S.LinkStyled>
  );
};
