import { Button } from '../../components/common/Button';
import { DataFetchFeedback } from '../../components/common/DataFetchFeedback';
import { Footer } from '../../components/layout/Footer';
import { Loading } from '../../components/common/Loading';
import { SimpleHeader } from '../../components/layout/SimpleHeader';
import { Text } from '../../components/common/Text';

import { useService } from '../../hooks/useService';
import { PrintPriceService } from '../../services/print-prices.service';
import { PrintPrice } from '../../types/PrintPrice';

import { PricesList } from './components/PricesList';

import * as S from './styles';

export const Prices: React.FC = () => {
  const {
    data: printPrices,
    isLoading,
    error,
    fetchDataAgain,
  } = useService<PrintPrice[]>(PrintPriceService.getPrintPrices);

  return (
    <S.Container>
      <SimpleHeader />
      <div className="content">
        <header>
          <h2>Revelação de fotos</h2>

          <Text size='lg'>Tabela de preços</Text>
        </header>

        {isLoading && (
          <Loading size={32} />
        )}

        <DataFetchFeedback
          dataName='preços'
          onTryAgain={fetchDataAgain}
          dataFetchHookProps={{ data: printPrices, error, isLoading }}
        >
          <div className="prices-list-container">
            <PricesList printPrices={printPrices} />
          </div>
        </DataFetchFeedback>

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
