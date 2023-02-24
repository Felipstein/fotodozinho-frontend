import { Text } from '../../components/Text';
import * as S from './styles';

export const Home: React.FC = () => {

  return (
    <S.Container>
      <h1>Que tal registrar sua <strong>história</strong> para sempre?</h1>

      <Text>É sempre bom revivermos nossos melhores momentos com uma foto.</Text>
      <Text>Viva o <strong>momento</strong>, nós o <strong>registramos</strong>!</Text>
    </S.Container>
  );
};
