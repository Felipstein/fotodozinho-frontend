import { useState } from 'react';

import { Footer } from '../../components/Footer';
import { Form } from '../../components/Form';
import { Field } from '../../components/Form/types';
import { LabelButton } from '../../components/LabelButton';
import { Logo } from '../../components/Logo';
import { Text } from '../../components/Text';
import { TermsModal } from './components/modals/TermsModal';

import * as S from './styles';

export const SignUp: React.FC = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const fields: Field[] = [
    {
      name: 'name',
      label: 'Nome',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'E-mail',
      type: 'email',
      placeholder: 'exemplo@exemplo.com',
      required: true,
    },
    {
      name: 'phone',
      label: 'Telefone',
      type: 'text',
      required: false,
    },
    {
      name: 'password',
      label: 'Senha',
      type: 'password',
      placeholder: 'Sua senha aqui',
      required: true,
    },
    {
      name: 'confirmPassword',
      label: 'Confirmar senha',
      type: 'password',
      placeholder: 'Confirme sua senha aqui',
      required: true,
    },
    {
      name: 'notifyServicesByEmail',
      label: 'Desejo ser notificado por e-mail sobre as atualizações dos meus serviços e pedidos.',
      type: 'checkbox',
      required: true,
    },
    {
      name: 'acceptTerms',
      label: 'Aceito os Termos de Serviço e Uso da Aplicação Foto do Zinho.',
      type: 'checkbox',
      required: true,
    },
  ];

  function handleCloseModal() {
    setIsModalOpened(false);
  }

  return (
    <S.PageContainer>
      <TermsModal isOpened={isModalOpened} onClose={handleCloseModal} />

      <S.Container>
        <header>
          <Logo scale={0.625} />
          <Text id='top-title' size='lg'>Bem-vindo(a)!</Text>
          <Text id='bottom-title'>Cadastre-se para usar nossos serviços já</Text>
        </header>

        <div className="form-container">
          <Form fields={fields}>
            Test
          </Form>

          {/* <S.FormStyled noValidate onSubmit={handleSubmit}>
            <div className="inputs">
              <Input
                label='Nome *'
                name='name'
                type='text'
                value={name}
                onChange={handleNameChange}
                errorFeedback={getErrorFeedback('name')}
              />

              <Input
                label='E-mail *'
                name='email'
                type='email'
                placeholder='exemplo@gmail.com'
                value={email}
                onChange={handleEmailChange}
                errorFeedback={getErrorFeedback('email')}
              />

              <Input
                label='Telefone'
                name='phone'
                type='text'
                value={phone}
                onChange={handlePhoneChange}
                errorFeedback={getErrorFeedback('phone')}
              />

              <PasswordInput
                label='Senha *'
                name='password'
                placeholder='Sua senha aqui'
                value={password}
                onChange={handlePasswordChange}
                errorFeedback={getErrorFeedback('password')}
              />

              <PasswordInput
                label='Confirmar senha *'
                name='confirmPassword'
                placeholder='Confirme sua senha aqui'
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                errorFeedback={getErrorFeedback('confirmPassword')}
              />
            </div>

            <div className="sub-actions">
              <CheckBox
                label='Desejo ser notificado por e-mail sobre as atualizações dos meus serviços e pedidos.'
                checked={notifyServicesByEmail}
                onChange={setNotifyServicesByEmail}
              />

              <CheckBox
                label='Aceito os Termos de Serviço e Uso da Aplicação Foto do Zinho.'
                checked={acceptTerms}
                onChange={setAcceptTerms}
              />

              <div className="label-button">
                <LabelButton onClick={() => setIsModalOpened(true)}>
                  Ver os Termos de Serviço e Uso
                </LabelButton>
              </div>
            </div>

            <div className="actions">
              <Button
                type='submit'
                disabled={!isFormValid}
              >
                Cadastrar
              </Button>
            </div>
          </S.FormStyled> */}
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
