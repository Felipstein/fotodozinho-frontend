import { useState } from 'react';
import { toast } from 'react-toastify';
import { Button } from '../../../components/common/Button';
import { LabelButton } from '../../../components/common/LabelButton';
import { HeaderOnlyLogo } from '../../../components/layout/HeaderOnlyLogo';
import { LayoutFooter } from '../../../components/layout/LayoutFooter';
import { FieldProps, validations } from '../../../components/logic/Form/Field/types';
import { FieldSpecificer } from '../../../components/logic/Form/FieldSpecifier';
import { useFormStatus } from '../../../hooks/useFormStatus';

import * as S from './styles';

export const ForgotPassword: React.FC = () => {
  const [isSendingEmail, setIsSendingEmail] = useState(false);

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
  ];

  async function handleSubmit(data: Record<string, any>) {
    try {
      setIsSendingEmail(true);
      console.log(data);
    } catch (err: Error | any) {
      toast.error(err.message || 'Ocorreu um problema enquanto enviamos para você as instruções de recuperação de senha, tente novamente mais tarde.');
    } finally {
      setIsSendingEmail(false);
    }
  }

  return (
    <LayoutFooter>
      <S.Container>
        <HeaderOnlyLogo
          topTitle='Esqueceu sua senha?'
          bottomTitle='Sem problemas! Nos diga seu e-mail e lhe enviaremos instruções para recuperar sua senha'
        />

        <div className="form-container">
          <S.FormStyled
            fields={fields}
            onSubmit={handleSubmit}
            onFormStatusChange={handleFormStatusChange}
          >

            <div className="inputs">
              <FieldSpecificer name='email' />
            </div>

            <div className="actions">
              <Button
                type='submit'
                disabled={!isFormValid}
                isLoading={isSendingEmail}
              >
              Enviar instruções
              </Button>

              <LabelButton isBlueVariant to='/login'>
                 Me leve de volta para o login
              </LabelButton>
            </div>
          </S.FormStyled>
        </div>
      </S.Container>
    </LayoutFooter>
  );
};
