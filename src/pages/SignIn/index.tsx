import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Input } from '../../components/Input';
import { LabelButton } from '../../components/LabelButton';
import { Logo } from '../../components/Logo';
import { PasswordInput } from '../../components/PasswordInput';
import { Text } from '../../components/Text';
import * as S from './styles';

export const SignIn: React.FC = () => {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <S.PageContainer>
      <S.Container>
        <header>
          <Logo scale={0.625} />
          <Text id='top-title' size='lg'>Bem-vindo(a) a nossa plataforma de serviços!</Text>
          <Text id='bottom-title'>Faça login para continuar</Text>
        </header>

        <div className="form-container">
          <S.FormStyled noValidate onSubmit={handleSubmit}>
            <Input
              label='E-mail'
              name='email'
              type='email'
              placeholder='exemplo@gmail.com'
            />

            <PasswordInput
              label='Senha'
              name='password'
              placeholder='Sua senha aqui'
            />

            <Button type='submit'>Fazer login</Button>
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
