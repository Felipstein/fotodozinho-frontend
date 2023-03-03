import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { SimpleHeader } from '../../components/SimpleHeader';
import { Text } from '../../components/Text';
import { PriceCard } from './components/PriceCard';

import * as S from './styles';

export const Prices: React.FC = () => {
  return (
    <S.Container>
      <SimpleHeader />
      <div className="content">
        <header>
          <h2>Revelação de fotos</h2>

          <Text size='lg'>Tabela de preços</Text>
        </header>

        <ul className="prices-list">
          <li>
            <PriceCard length='Polaroide' price={5.5} />
          </li>
          <li>
            <PriceCard length='10x15' price={5} />
          </li>
          <li>
            <PriceCard length='15x20' price={10} />
          </li>
          <li>
            <PriceCard length='15x21' price={10} />
          </li>
          <li>
            <PriceCard length='20x30' price={15} />
          </li>
        </ul>

        <div className="actions">
          <Text>Que tal revelar algumas fotos? É simples e rápido!</Text>

          <Button>
            Revelar agora!
          </Button>
        </div>
      </div>
      <Footer />
    </S.Container>
  );
};
