import { useState } from 'react';
import { Button } from '../../components/Button';
import { CheckBox } from '../../components/CheckBox';
import { Footer } from '../../components/Footer';
import { Input } from '../../components/Input';
import { LabelButton } from '../../components/LabelButton';
import { Logo } from '../../components/Logo';
import { PasswordInput } from '../../components/PasswordInput';
import { Text } from '../../components/Text';
import { TermsModal } from './components/modals/TermsModal';

import * as S from './styles';

export const SignUp: React.FC = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <S.PageContainer>
      <TermsModal isOpened={isModalOpened} />

      <S.Container>
        <header>
          <Logo scale={0.625} />
          <Text id='top-title' size='lg'>Bem-vindo(a)!</Text>
          <Text id='bottom-title'>Cadastre-se para usar nossos serviços já</Text>
        </header>

        <div className="form-container">
          <S.FormStyled noValidate onSubmit={handleSubmit}>
            <div className="inputs">
              <Input
                label='Nome'
                name='name'
                type='text'
              />

              <Input
                label='E-mail'
                name='email'
                type='email'
                placeholder='exemplo@gmail.com'
              />

              <Input
                label='Telefone'
                name='phone'
                type='text'
              />

              <PasswordInput
                label='Senha'
                name='password'
                placeholder='Sua senha aqui'
              />

              <PasswordInput
                label='Confirmar senha'
                name='confirmPassword'
                placeholder='Confirme sua senha aqui'
              />
            </div>

            <div className="sub-actions">
              <CheckBox
                label='Desejo ser notificado por e-mail sobre as atualizações dos meus serviços e pedidos.'
              />

              <CheckBox
                label='Aceito os Termos de Serviço e Uso da Aplicação Foto do Zinho.'
              />

              <div className="label-button">
                <LabelButton onClick={() => setIsModalOpened(true)}>
                  Ver os Termos de Serviço e Uso
                </LabelButton>
              </div>
            </div>

            <div className="actions">
              <Button type='submit'>Cadastrar</Button>
            </div>
          </S.FormStyled>
        </div>

        <div className="sub-actions">
          <LabelButton $isBlueVariant to='/login'>
            Já possuo uma conta
          </LabelButton>
        </div>
      </S.Container>
      <Footer />
    </S.PageContainer>
  );
};
