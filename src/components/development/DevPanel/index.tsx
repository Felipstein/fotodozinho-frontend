import { useState } from 'react';
import { XIcon } from '../../../icons/XIcon';
import { IconButton } from '../../common/IconButton';
import { Text } from '../../common/Text';
import { FloatingLogoutButton } from '../FloatingLogoutButton';

import * as S from './styles';

export const DevPanel: React.FC = () => {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <S.Container
      isOpened={isOpened}
    >
      <S.Header>
        <h2 id='dev-title'>Painel Dev</h2>

        <IconButton>
          <XIcon />
        </IconButton>
      </S.Header>

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
