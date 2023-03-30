import { ReactElement, ReactNode } from 'react';
import { DataFetchFeedbackHookProps } from '../../../hooks/useDataFetchFeedback';

export interface DataFetchFeedbackProps {
  dataName?: string;
  modify?: {
    noDataFoundComponent?: ReactElement;
    failedToFetchDataComponent?: ReactElement;
    loadingComponent?: ReactElement;
  };
  onTryAgain?: () => void;
  dataFetchHookProps: DataFetchFeedbackHookProps;
  children: ReactNode;
}
