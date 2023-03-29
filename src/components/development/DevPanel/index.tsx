import { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { XIcon } from '../../../icons/XIcon';
import { IconButton } from '../../common/IconButton';
import { Text } from '../../common/Text';
import { FloatingLogoutButton } from '../FloatingLogoutButton';

import * as S from './styles';

export const DevPanel: React.FC = () => {
  const [isOpened, setIsOpened] = useState(true);

  const { isAuthenticated } = useAuth();

  return (
    <>
      <S.DevPanelToggle
        isOpened={isOpened}
        onClick={() => setIsOpened(true)}
      >
        Painel Dev
      </S.DevPanelToggle>
      <S.Container
        isOpened={isOpened}
      >
        <S.Header>
          <h2 id='dev-title'>Painel Dev</h2>

          <IconButton onClick={() => setIsOpened(false)}>
            <XIcon />
          </IconButton>
        </S.Header>

        <div className="content">

          {isAuthenticated ? (
            <div className="group">
              <Text size='sm'>
                Desconecte de sua conta
              </Text>

              <FloatingLogoutButton />
            </div>
          ) : (
            <S.DangerText>
              Não autenticado
            </S.DangerText>
          )}
        </div>
      </S.Container>
    </>
  );
};
