import { Button } from '../../components/Button';
import { CheckBox } from '../../components/CheckBox';
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
            <div className="inputs">
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
            </div>

            <div className="sub-actions">
              <CheckBox label='Mantenha-me logado' />

              <LabelButton $isBlueVariant to='/forgot-password'>
                Esqueci a senha
              </LabelButton>
            </div>

            <div className="actions">
              <Button type='submit'>Fazer login</Button>
            </div>
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
