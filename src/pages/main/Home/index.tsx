import { Button } from '../../../components/common/Button';
import { Footer } from '../../../components/layout/Footer';
import { LabelButton } from '../../../components/common/LabelButton';
import { Logo } from '../../../components/common/Logo';
import { Text } from '../../../components/common/Text';

import * as S from './styles';

export const Home: React.FC = () => {

  return (
    <S.PageContainer>
      <S.Container>
        <h1>Que tal registrar sua <strong>história</strong> para sempre?</h1>

        <div className="subtitle">
          <Text size='xlg' weight={500} asChild>
            <p>
              É sempre bom revivermos nossos melhores momentos com uma foto.
            </p>
          </Text>
          <Text size='xlg' weight={500} asChild>
            <p>
              Viva o <strong>momento</strong>, nós o <strong>registramos</strong>!
            </p>
          </Text>
        </div>

        <Logo />

        <div className="actions">
          <Button type='navigate' to='/app'>
            Ver nossos serviços
          </Button>

          <Button variant='secondary'>
            Entrar em contato
          </Button>
        </div>

        <div className="sub-actions">
          <LabelButton to='/prices' linkTarget='navigate'>
            Ver tabela de preços para revelação de foto
          </LabelButton>
        </div>
      </S.Container>

      <Footer />
    </S.PageContainer>
  );
};
