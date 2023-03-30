import { useState } from 'react';
import { toast } from 'react-toastify';

import { Button } from '../../../components/common/Button';
import { Text } from '../../../components/common/Text';
import { HeaderOnlyLogo } from '../../../components/layout/HeaderOnlyLogo';
import { LayoutFooter } from '../../../components/layout/LayoutFooter';
import { useAuth } from '../../../hooks/useAuth';
import { ValidateEmailService } from '../../../services/validate-email.service';

import * as S from './styles';

export const VerifyRequire: React.FC = () => {
  const { user, isLoading: isSigningOut, signOut } = useAuth();
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  async function handleSendValidateTokenAgain() {
    try {
      setIsSendingEmail(true);

      await ValidateEmailService.sendNewValidateEmail({ email: user!.email });

      toast.info('Enviamos um novo e-mail para você, dá uma olhadinha lá.');
    } catch (err: Error | any) {
      toast.error(err.message || 'Ocorreu um problema e não conseguimos enviar uma nova validação de e-mail, tente novamente.');
    } finally {
      setIsSendingEmail(false);
    }
  }

  return (
    <LayoutFooter>
      <S.CenteredContent>
        <HeaderOnlyLogo
          bottomTitle='Seu cadastro está quase acabando!'
        />

        <div className="sub-title">
          <Text weight={500}>
            Enviamos no seu e-mail <strong>luisfelipe-oliveira@outlook.com.br</strong> um link para validar sua conta!
          </Text>

          <Text weight={500}>
            Basta apenas um clique e está tudo pronto, nossos serviços estarão todos disponíveis para você.
          </Text>
        </div>

        <Text id='send-again' weight={500}>
          Não chegou nada ou já expirou? Sem problemas
        </Text>

        <div className="actions">
          <Button
            isLoading={isSendingEmail}
            onClick={handleSendValidateTokenAgain}
          >
            Enviar novamente
          </Button>

          <Button
            isLoading={isSigningOut}
            onClick={signOut}
            variant='secondary'
          >
            Conectar com outra conta
          </Button>
        </div>

      </S.CenteredContent>
    </LayoutFooter>
  );
};
