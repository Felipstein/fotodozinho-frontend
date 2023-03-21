import { useState } from 'react';

import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { FieldProps } from '../../components/Form/Field/types';
import { FieldSpecificer } from '../../components/Form/FieldSpecifier';
import { LabelButton } from '../../components/LabelButton';
import { Logo } from '../../components/Logo';
import { Text } from '../../components/Text';
import { useAuth } from '../../contexts/AuthContext';
import { useFormStatus } from '../../hooks/useFormStatus';
import { SignUpRequest } from '../../types/AuthDTO';
import { formatPhone } from '../../utils/formatPhone';
import { TermsModal } from './components/modals/TermsModal';

import * as S from './styles';

export const SignUp: React.FC = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const { signUp, isLoading } = useAuth();

  const {
    isFormValid,
    handleFormStatusChange,
  } = useFormStatus();

  const fields: FieldProps[] = [
    {
      name: 'name',
      label: 'Nome',
      type: 'text',
    },
    {
      name: 'email',
      label: 'E-mail',
      type: 'email',
      placeholder: 'exemplo@exemplo.com',
      validator: {
        matchesRegex: {
          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          errorFeedback: 'E-mail inválido',
        },
      },
    },
    {
      name: 'phone',
      label: 'Telefone',
      type: 'text',
      required: false,
      mask: formatPhone,
    },
    {
      name: 'password',
      label: 'Senha',
      type: 'password',
      placeholder: 'Sua senha aqui',
      validator: {
        matchesRegex: {
          value: /^(?=.*\d)(?=.*[A-Z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
          errorFeedback: 'Sua senha deve possuir pelo menos 1 número, 1 letra maiúscula e 1 símbolo',
        },
        minLength: {
          value: 8,
          errorFeedback: 'Sua senha deve possuir no mínimo 8 caracteres',
        },
      },
    },
    {
      name: 'confirmPassword',
      label: 'Confirmar senha',
      type: 'password',
      placeholder: 'Confirme sua senha aqui',
      validator: {
        byContext: {
          value: ({ password }, confirmPassword) => password === confirmPassword,
          errorFeedback: 'As senhas não coincidem',
        },
      },
    },
    {
      name: 'notifyServicesByEmail',
      label: 'Desejo ser notificado por e-mail sobre as atualizações dos meus serviços e pedidos.',
      type: 'checkbox',
    },
    {
      name: 'acceptedTermsAndConditions',
      label: 'Aceito os Termos de Serviço e Uso da Aplicação Foto do Zinho.',
      type: 'checkbox',
    },
  ];

  function handleCloseModal() {
    setIsModalOpened(false);
  }

  async function handleSubmit(data: Record<string, any>) {
    await signUp(data as SignUpRequest);
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
          <S.FormStyled
            fields={fields}
            onSubmit={handleSubmit}
            onFormStatusChange={handleFormStatusChange}
          >

            <div className="inputs">
              <FieldSpecificer name='name' />

              <FieldSpecificer name='email' />

              <FieldSpecificer name='phone' />

              <FieldSpecificer name='password' />

              <FieldSpecificer name='confirmPassword' />
            </div>

            <div className="sub-actions">
              <FieldSpecificer name='notifyServicesByEmail' />

              <FieldSpecificer name='acceptedTermsAndConditions' />

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
                isLoading={isLoading}
              >
                Cadastrar
              </Button>
            </div>

          </S.FormStyled>
        </div>

        <div className="sub-actions">
          <LabelButton isBlueVariant to='/login'>
            Já possuo uma conta
          </LabelButton>
        </div>

      </S.Container>
      <Footer />
    </S.PageContainer>
  );
};
