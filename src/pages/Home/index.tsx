import { Logo } from '../../components/Logo';
import { Text } from '../../components/Text';
import * as S from './styles';

export const Home: React.FC = () => {

  return (
    <S.Container>
      <h1>Que tal registrar sua <strong>história</strong> para sempre?</h1>

      <Text size='xlg' weight={500}>É sempre bom revivermos nossos melhores momentos com uma foto.</Text>
      <Text size='xlg' weight={500}>Viva o <strong>momento</strong>, nós o <strong>registramos</strong>!</Text>

      <Logo />
    </S.Container>
  );
};
