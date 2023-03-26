import { useState } from 'react';
import { Text } from '../../common/Text';
import { FloatingLogoutButton } from '../FloatingLogoutButton';

import * as S from './styles';

export const DevPanel: React.FC = () => {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <S.Container
      isOpened={isOpened}
    >
      <S.Header />

      <div className="content">
        <div className="group">
          <Text size='sm'>
            Desconecte de sua conta
          </Text>

          <FloatingLogoutButton />
        </div>
      </div>
    </S.Container>
  );
};
