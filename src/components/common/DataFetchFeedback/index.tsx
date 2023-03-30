import { useDataFetchFeedback } from '../../../hooks/useDataFetchFeedback';
import { FailedToFetchData } from '../FailedToFetchData';
import { LoadingData } from '../LoadingData';
import { NoDataFound } from '../NoDataFound';
import { DataFetchFeedbackProps } from './types';

export const DataFetchFeedback: React.FC<DataFetchFeedbackProps> = ({ dataName, onTryAgain, dataFetchHookProps, children }) => {
  const {
    isFetching, isFailedToFetch, isDataArrayEmpty, noDataFound, canRenderData,
  } = useDataFetchFeedback({
    data: dataFetchHookProps.data,
    error: dataFetchHookProps.error,
    isLoading: dataFetchHookProps.isLoading,
  });

  return (
    <>
      {isFetching && <LoadingData dataName={dataName} />}

      {isFailedToFetch && <FailedToFetchData dataName={dataName} onTryAgain={onTryAgain} />}

      {(isDataArrayEmpty || noDataFound) && <NoDataFound dataName={dataName} onTryAgain={onTryAgain} />}

      {canRenderData && children}
    </>
  );
};
