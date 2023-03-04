import { useState } from 'react';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { SimpleHeader } from '../../components/SimpleHeader';
import { Text } from '../../components/Text';
import { PrintPrice } from '../../types/PrintPrice';
import { PricesList } from './components/PricesList';

import * as S from './styles';

export const Prices: React.FC = () => {
  const [printPrices] = useState<PrintPrice[]>([
    {
      id: Math.random().toString(),
      length: 'Polaroide',
      price: 5.5,
    },
    {
      id: Math.random().toString(),
      length: '10x15',
      price: 5,
    },
    {
      id: Math.random().toString(),
      length: '15x20',
      price: 10,
    },
    {
      id: Math.random().toString(),
      length: '15x21',
      price: 10,
    },
    {
      id: Math.random().toString(),
      length: '20x30',
      price: 15,
    },
  ]);

  return (
    <S.Container>
      <SimpleHeader />
      <div className="content">
        <header>
          <h2>Revelação de fotos</h2>

          <Text size='lg'>Tabela de preços</Text>
        </header>

        <div className="prices-list-container">
          <PricesList printPrices={printPrices} />
        </div>

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
