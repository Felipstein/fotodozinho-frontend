import { AppLayoutProps } from './types';
import * as S from './styles';
import { Logo } from '../../common/Logo';
import { Button } from '../../common/Button';
import { SmileySadIcon } from '../../../icons/SmileySadIcon';

export const AppLayout: React.FC<AppLayoutProps> = ({ centerContent = false, children }) => {

  return (
    <S.Container>
      <S.SidebarNav>
        <Logo scale={0.35} />

        <Button>
          Notificações
        </Button>

        <Button>
          Revelação
        </Button>

        <Button>
          Loja
        </Button>

        <Button>
          Meus Pedidos
        </Button>

        <Button>
          Fotografia
        </Button>

        <Button>
          Suporte/Ajuda
        </Button>

        <Button>
          Meus Dados
        </Button>

        <Button>
          Sair
        </Button>
      </S.SidebarNav>

      <S.MenuContent>
        <S.Header>
          <SmileySadIcon />

          <h1>Notificações</h1>
        </S.Header>

        <S.Content
          isCentered={centerContent}
        >
          {children}
        </S.Content>
      </S.MenuContent>
    </S.Container>
  );
};
