import { ReactNode } from 'react';
import { DataFetchFeedbackHookProps } from '../../hooks/useDataFetchFeedback';

export interface DataFetchFeedbackProps {
  dataName?: string;
  onTryAgain?: () => void;
  dataFetchHookProps: DataFetchFeedbackHookProps;
  children: ReactNode;
}
