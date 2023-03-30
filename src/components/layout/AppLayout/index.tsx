import { SmileySadIcon } from '../../../icons/SmileySadIcon';
import { AsideNav } from './components/MenuNav';

import { AppLayoutProps } from './types';
import * as S from './styles';

export const AppLayout: React.FC<AppLayoutProps> = ({ centerContent = false, children }) => {

  return (
    <S.Container>
      <AsideNav />

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
