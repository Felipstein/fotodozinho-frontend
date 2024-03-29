import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button } from '../../../components/common/Button';
import { LabelButton } from '../../../components/common/LabelButton';
import { HeaderOnlyLogo } from '../../../components/layout/HeaderOnlyLogo';
import { LayoutFooter } from '../../../components/layout/LayoutFooter';
import { SplashScreen } from '../../../components/layout/SplashScreen';
import { FieldProps, validations } from '../../../components/logic/Form/Field/types';
import { FieldSpecificer } from '../../../components/logic/Form/FieldSpecifier';
import { APIError } from '../../../errors/APIError';
import { useFormStatus } from '../../../hooks/useFormStatus';
import { ForgotPasswordService } from '../../../services/forgot-password.service';

import * as S from './styles';

export const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const [isSettingPassword, setIsSettingPassword] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  const token = params.get('token');

  const {
    isFormValid,
    handleFormStatusChange,
  } = useFormStatus();

  const fields: FieldProps[] = [
    {
      name: 'newPassword',
      label: 'Nova senha',
      type: 'password',
      placeholder: 'Sua senha aqui',
      validator: validations.password,
    },
    {
      name: 'confirmNewPassword',
      label: 'Confirmar nova senha',
      type: 'password',
      placeholder: 'Confirme sua senha aqui',
      validator: {
        byContext: {
          value: ({ newPassword }, confirmNewPassword) => newPassword === confirmNewPassword,
          errorFeedback: 'As senhas não coincidem',
        },
      },
    },
  ];

  useEffect(() => {
    async function verifyToken() {
      try {
        if(!token) {
          throw new APIError('Token inválido', 400);
        }

        setShowLoadingScreen(true);

        await ForgotPasswordService.verifyToken({ token });
      } catch(err: Error | any) {

        toast.error(err.message || 'Ocorreu um erro enquanto verificavamos o token, tente novamente.');

        navigate('/forgot-password');
      } finally {
        setShowLoadingScreen(false);
      }
    }

    verifyToken();
  }, [token, navigate]);

  async function handleSubmit({ newPassword, confirmNewPassword }: Record<string, any>) {
    try {
      setIsSettingPassword(true);

      await ForgotPasswordService.setPassword({ token: token!, newPassword, confirmNewPassword });

      toast.success('Sua senha foi alterada com êxito! Agora você pode se autenticar novamente.');
      navigate('/login');
    } catch (err: Error | any) {

      toast.error(err.message || 'Ocorreu um erro enquanto tentavamos alterar sua senha, tente novamente ou peça por outro token.');

    } finally {
      setIsSettingPassword(false);
    }
  }

  return (
    <>
      <SplashScreen
        visible={showLoadingScreen}
        loadingMessage={'Verificando seu token...'}
        instantlyDisplay
      />

      <LayoutFooter>
        <S.Container>
          <HeaderOnlyLogo
            topTitle='Pronto para alterar sua senha'
            bottomTitle='Não se esqueça de anotar bem essa nova senha, viu?'
          />

          <div className="form-container">
            <S.FormStyled
              fields={fields}
              onSubmit={handleSubmit}
              onFormStatusChange={handleFormStatusChange}
            >

              <div className="inputs">
                <FieldSpecificer name='newPassword' />

                <FieldSpecificer name='confirmNewPassword' />
              </div>

              <div className="actions">
                <Button
                  type='submit'
                  disabled={!isFormValid && !!token}
                  isLoading={isSettingPassword}
                >
                  Alterar senha
                </Button>

                <LabelButton
                  isBlueVariant
                  to='/login'
                >
                  Me leve de volta para o login
                </LabelButton>
              </div>
            </S.FormStyled>
          </div>
        </S.Container>
      </LayoutFooter>
    </>
  );
};
