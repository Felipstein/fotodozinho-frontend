export interface FailedToFetchDataProps {
  dataName?: string;
  onTryAgain?: () => void;
  isFetchingAgain?: boolean;
}
