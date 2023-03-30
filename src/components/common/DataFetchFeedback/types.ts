import { ReactNode } from 'react';
import { DataFetchFeedbackHookProps } from '../../../hooks/useDataFetchFeedback';

export interface DataFetchFeedbackProps {
  dataName?: string;
  onTryAgain?: () => void;
  isFetchingAgain?: boolean;
  dataFetchHookProps: DataFetchFeedbackHookProps;
  children: ReactNode;
}
