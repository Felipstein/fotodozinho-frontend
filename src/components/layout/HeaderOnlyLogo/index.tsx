import { Logo } from '../../common/Logo';
import { Text } from '../../common/Text';

import * as S from './styles';
import { HeaderOnlyLogoProps } from './types';

export const HeaderOnlyLogo: React.FC<HeaderOnlyLogoProps> = ({ topTitle, bottomTitle }) => {

  return (
    <S.Container>
      <Logo scale={0.625} />

      {topTitle && (
        <Text id='top-title' size='lg'>{topTitle}</Text>
      )}

      {bottomTitle && (
        <Text id='bottom-title'>{bottomTitle}</Text>
      )}
    </S.Container>
  );
};
