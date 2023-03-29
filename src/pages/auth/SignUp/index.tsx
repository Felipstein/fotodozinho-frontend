import { useState } from 'react';

import { Button } from '../../../components/common/Button';
import { FieldProps, validations } from '../../../components/logic/Form/Field/types';
import { FieldSpecificer } from '../../../components/logic/Form/FieldSpecifier';
import { LabelButton } from '../../../components/common/LabelButton';
import { LayoutFooter } from '../../../components/layout/LayoutFooter';

import { useAuth } from '../../../contexts/AuthContext';
import { useFormStatus } from '../../../hooks/useFormStatus';
import { SignUpRequest } from '../../../types/AuthDTO';
import { formatPhone } from '../../../utils/formatPhone';

import { TermsModal } from './components/modals/TermsModal';

import * as S from './styles';
import { HeaderOnlyLogo } from '../../../components/layout/HeaderOnlyLogo';

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
      validator: validations.email,
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
      validator: validations.password,
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
    <LayoutFooter>
      <TermsModal isOpened={isModalOpened} onClose={handleCloseModal} />

      <S.Container>
        <HeaderOnlyLogo
          topTitle='Bem-vindo(a)!'
          bottomTitle='Cadastre-se para usar nossos serviços já'
        />

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
    </LayoutFooter>
  );
};
