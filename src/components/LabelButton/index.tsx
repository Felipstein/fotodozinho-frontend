import { targetMapper } from '../../shared/LinkTarget';

import { LabelButtonProps } from './types';
import * as S from './styles';

export const LabelButton: React.FC<LabelButtonProps> = ({ isBlueVariant = false, to, linkTarget = 'navigate', onClick, children }) => {
  if(linkTarget === 'navigate') {
    return (
      <S.LinkStyled
        $isBlueVariant={isBlueVariant}
        to={to || ''}
        onClick={onClick}
      >
        {children}
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
    >
      {children}
    </S.LinkStyled>
  );
};
