import { useDataFetchFeedback } from '../../hooks/useDataFetchFeedback';
import { FailedToFetchData } from '../FailedToFetchData';
import { NoDataFound } from '../NoDataFound';
import { DataFetchFeedbackProps } from './types';

export const DataFetchFeedback: React.FC<DataFetchFeedbackProps> = ({ dataName, onTryAgain, dataFetchHookProps, children }) => {
  const {
    isFailedToFetch, isDataArrayEmpty, noDataFound, canRenderData,
  } = useDataFetchFeedback({
    data: dataFetchHookProps.data,
    error: dataFetchHookProps.error,
    isLoading: dataFetchHookProps.isLoading,
  });

  return (
    <>
      {isFailedToFetch && <FailedToFetchData dataName={dataName} onTryAgain={onTryAgain} />}

      {(isDataArrayEmpty || noDataFound) && <NoDataFound dataName={dataName} onTryAgain={onTryAgain} />}

      {canRenderData && children}
    </>
  );
};
