import { Logo } from '../../components/common/Logo';
import { Text } from '../../components/common/Text';
import { LayoutFooter } from '../../components/layout/LayoutFooter';

import * as S from './styles';

export const VerifyRequire: React.FC = () => {

  return (
    <LayoutFooter>
      <S.CenteredContent>
        <Logo scale={0.6} />

        <Text id='title' size='lg' weight={600}>
          Seu cadastro está quase acabando!
        </Text>

        <div className="sub-title">
          <Text weight={500}>
            Enviamos no seu e-mail <strong>luisfelipe-oliveira@outlook.com.br</strong> um link para validar sua conta!
          </Text>

          <Text weight={500}>
            Basta apenas um clique e está tudo pronto, nossos serviços estarão todos disponíveis para você.
          </Text>
        </div>

      </S.CenteredContent>
    </LayoutFooter>
  );
};
