import { AppLayoutProps } from './types';
import * as S from './styles';

export const AppLayout: React.FC<AppLayoutProps> = ({ centerContent = false, children }) => {

  return (
    <S.Container>
      <S.SidebarNav>

      </S.SidebarNav>

      <S.MenuContent>
        <S.Header>

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
