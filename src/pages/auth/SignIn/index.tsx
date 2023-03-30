import { Button } from '../../../components/common/Button';
import { FieldProps, validations } from '../../../components/logic/Form/Field/types';
import { FieldSpecificer } from '../../../components/logic/Form/FieldSpecifier';
import { LabelButton } from '../../../components/common/LabelButton';
import { LayoutFooter } from '../../../components/layout/LayoutFooter';

import { useAuth } from '../../../hooks/useAuth';
import { useFormStatus } from '../../../hooks/useFormStatus';
import { LogInRequest } from '../../../types/AuthDTO';

import * as S from './styles';
import { HeaderOnlyLogo } from '../../../components/layout/HeaderOnlyLogo';

export const SignIn: React.FC = () => {

  const { logIn, isLoading } = useAuth();

  const {
    isFormValid,
    handleFormStatusChange,
  } = useFormStatus();

  const fields: FieldProps[] = [
    {
      name: 'email',
      label: 'E-mail',
      type: 'email',
      placeholder: 'exemplo@gmail.com',
      validator: validations.email,
    },
    {
      name: 'password',
      label: 'Senha',
      type: 'password',
      placeholder: 'Sua senha aqui',
    },
    {
      name: 'rememberMe',
      label: 'Mantenha-me logado',
      type: 'checkbox',
    },
  ];

  async function handleSubmit(data: Record<string, any>) {
    await logIn(data as LogInRequest);
  }

  return (
    <LayoutFooter>
      <S.Container>
        <HeaderOnlyLogo
          topTitle='Bem-vindo(a) a nossa plataforma de serviços!'
          bottomTitle='Faça login para continuar'
        />

        <div className="form-container">
          <S.FormStyled
            fields={fields}
            onSubmit={handleSubmit}
            onFormStatusChange={handleFormStatusChange}
          >

            <div className="inputs">
              <FieldSpecificer name='email' />

              <FieldSpecificer name='password' />
            </div>

            <div className="sub-actions">
              <FieldSpecificer name='rememberMe' />

              <LabelButton isBlueVariant to='/forgot-password'>
                  Esqueci a senha
              </LabelButton>
            </div>

            <div className="actions">
              <Button
                type='submit'
                disabled={!isFormValid}
                isLoading={isLoading}
              >Fazer login</Button>
            </div>
          </S.FormStyled>
        </div>

        <div className="sub-actions">
          <LabelButton isBlueVariant to='/signup'>
              Não possuo uma conta
          </LabelButton>
        </div>
      </S.Container>
    </LayoutFooter>
  );
};
