import { useEffect } from 'react';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Loading } from '../../components/Loading';
import { SimpleHeader } from '../../components/SimpleHeader';
import { Text } from '../../components/Text';
import { useService } from '../../hooks/useService';
import { printPriceService } from '../../services/print-prices';
import { PrintPrice } from '../../types/PrintPrice';
import { PricesList } from './components/PricesList';

import * as S from './styles';

export const Prices: React.FC = () => {
  const {
    data: printPrices,
    isLoading,
    error,
  } = useService<PrintPrice[]>(printPriceService.getPrintPrices);

  return (
    <S.Container>
      <SimpleHeader />
      <div className="content">
        <header>
          <h2>Revelação de fotos</h2>

          <Text size='lg'>Tabela de preços</Text>
        </header>

        {!isLoading && error && (
          <Text style={{ color: 'red' }} weight={500}>Falha ao carregar os preços</Text>
        )}

        {isLoading && (
          <Loading size={32} />
        )}

        {!error && !isLoading && printPrices.length > 0 && (
          <div className="prices-list-container">
            <PricesList printPrices={printPrices} />
          </div>
        )}

        {!error && !isLoading && printPrices.length === 0 && (
          <Text style={{ opacity: 0.8 }} weight={500}>Nenhum preço encontrado</Text>
        )}

        <div className="actions">
          <Text>Que tal revelar algumas fotos? É simples e rápido!</Text>

          <Button type='navigate' to='/app/print'>
            Revelar agora!
          </Button>
        </div>
      </div>
      <Footer />
    </S.Container>
  );
};
