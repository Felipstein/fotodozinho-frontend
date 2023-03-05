import { Footer } from '../../components/Footer';
import { LabelButton } from '../../components/LabelButton';
import { Logo } from '../../components/Logo';
import { Text } from '../../components/Text';
import * as S from './styles';

export const SignIn: React.FC = () => {
  return (
    <S.PageContainer>
      <S.Container>
        <header>
          <Logo scale={0.625} />
          <Text id='top-title' size='lg'>Bem-vindo(a) a nossa plataforma de serviços!</Text>
          <Text id='bottom-title'>Faça login para continuar</Text>
        </header>

        <div className="form-container">
          <S.FormStyled>

          </S.FormStyled>
        </div>

        <div className="sub-actions">
          <LabelButton $isBlueVariant to='/signup'>
            Não possuo uma conta
          </LabelButton>
        </div>
      </S.Container>
      <Footer />
    </S.PageContainer>
  );
};
