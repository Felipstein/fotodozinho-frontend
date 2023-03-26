import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Logo } from '../../components/common/Logo';
import { SplashScreen } from '../../components/layout/SplashScreen';
import { APIError } from '../../errors/APIError';
import { ValidateEmailService } from '../../services/validate-email.service';

import * as S from './styles';

export const ValidateEmail: React.FC = () => {
  const navigate = useNavigate();
  const { validateToken } = useParams();

  useEffect(() => {
    async function validateEmail() {

      try {
        if(!validateToken) {
          throw new APIError('Token inválido', -1);
        }

        await ValidateEmailService.validateEmail({ token: validateToken });

        toast.success('Seu e-mail agora está validado. Agora você pode acessar nossos serviços!');
        navigate('/app');
      } catch (err: APIError | Error | any) {
        toast.error(err.message || 'Ocorreu um problema ao validar seu e-mail, tente novamente.');
        navigate('/verifyrequest');
      }
    }

    validateEmail();
  }, [validateToken, navigate]);

  return (
    <S.CenteredContent>
      <SplashScreen
        visible
        loadingMessage='Estamos validando seu e-mail...'
      />

      <Logo />
    </S.CenteredContent>
  );
};
