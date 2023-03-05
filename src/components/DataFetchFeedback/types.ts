import { ReactNode } from 'react';
import { DataFetchFeedbackHookProps } from '../../hooks/useDataFetchFeedback';

export interface DataFetchFeedbackProps extends DataFetchFeedbackHookProps {
  dataName?: string;
  onTryAgain?: () => void;
  children: ReactNode;
}
