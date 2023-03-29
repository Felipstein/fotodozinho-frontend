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

  const [isVerifingToken, setIsVerifingToken] = useState(true);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  const token = params.get('token');

  const {
    isFormValid,
    handleFormStatusChange,
  } = useFormStatus();

  const fields: FieldProps[] = [
    {
      name: 'password',
      label: 'Nova senha',
      type: 'password',
      placeholder: 'Sua senha aqui',
      validator: validations.password,
    },
    {
      name: 'confirmPassword',
      label: 'Confirmar nova senha',
      type: 'password',
      placeholder: 'Confirme sua senha aqui',
      validator: {
        byContext: {
          value: ({ password }, confirmPassword) => password === confirmPassword,
          errorFeedback: 'As senhas não coincidem',
        },
      },
    },
  ];

  useEffect(() => {
    let timer: number | undefined;

    async function verifyToken() {
      try {
        setIsVerifingToken(true);

        if(!token) {
          throw new APIError('Token inválido', 400);
        }

        timer = setTimeout(() => {
          setShowLoadingScreen(true);
        }, 1500);

        await ForgotPasswordService.verifyToken({ token });

        toast.success('Tudo certo com seu token ehehehehehheheheheheehehehehehh');
      } catch(err: Error | any) {

        toast.error(err.message || 'Ocorreu um erro enquanto verificavamos o token, tente novamente.');

        navigate('/forgot-password');
      } finally {
        setIsVerifingToken(false);
        setShowLoadingScreen(false);

        if(timer != undefined) {
          clearTimeout(timer);
        }
      }
    }

    verifyToken();

    return () => {
      if(timer != undefined) {
        clearTimeout(timer);
      }
    };
  }, [token, navigate]);

  async function handleSubmit(data: Record<string, any>) {
    console.log(data);
  }

  return (
    <>
      <SplashScreen
        visible={showLoadingScreen}
        loadingMessage={'Verificando seu token...'}
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
                <FieldSpecificer name='password' />

                <FieldSpecificer name='confirmPassword' />
              </div>

              <div className="actions">
                <Button
                  type='submit'
                  disabled={!isFormValid}
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
