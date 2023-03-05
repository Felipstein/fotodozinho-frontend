import { Button } from '../../components/Button';
import { FailedToFetchData } from '../../components/FailedToFetchData';
import { Footer } from '../../components/Footer';
import { Loading } from '../../components/Loading';
import { NoDataFound } from '../../components/NoDataFound';
import { SimpleHeader } from '../../components/SimpleHeader';
import { Text } from '../../components/Text';
import { useDataFetchFeedback } from '../../hooks/useDataFetchFeedback';
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
    fetchDataAgain,
  } = useService<PrintPrice[]>(printPriceService.getPrintPrices);

  const {
    isFailedToFetch: isFailedToLoadPrices,
    isDataArrayEmpty: isPrintPricesEmpty,
    canRenderData: hasPrintPrices,
  } = useDataFetchFeedback({ data: printPrices, isLoading, error });

  return (
    <S.Container>
      <SimpleHeader />
      <div className="content">
        <header>
          <h2>Revelação de fotos</h2>

          <Text size='lg'>Tabela de preços</Text>
        </header>

        {isFailedToLoadPrices && (
          <FailedToFetchData dataName='preços' onTryAgain={fetchDataAgain} />
        )}

        {isLoading && (
          <Loading size={32} />
        )}

        {hasPrintPrices && (
          <div className="prices-list-container">
            <PricesList printPrices={printPrices} />
          </div>
        )}

        {isPrintPricesEmpty && (
          <NoDataFound dataName='preços' onTryAgain={fetchDataAgain} />
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
