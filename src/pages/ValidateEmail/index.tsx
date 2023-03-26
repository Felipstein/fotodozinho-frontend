import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SplashScreen } from '../../components/layout/SplashScreen';

export const ValidateEmail: React.FC = () => {
  const { validateToken } = useParams();

  useEffect(() => {
    async function validateEmail() {



    }

    validateEmail();
  }, []);

  return (
    <SplashScreen
      visible
      loadingMessage='Estamos validando seu e-mail...'
    />
  );
};
