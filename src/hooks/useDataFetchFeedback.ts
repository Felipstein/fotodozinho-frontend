export interface DataFetchFeedbackHookProps {
  isLoading: boolean;
  error: string | null;
  data: any;
}

interface DataFetchFeedbackResponse {
  isFailedToFetch: boolean;
  isDataArrayEmpty: boolean;
  noDataFound: boolean;
  canRenderData: boolean;
}

export function useDataFetchFeedback({ isLoading, error, data }: DataFetchFeedbackProps): DataFetchFeedbackResponse {

  const isFailedToFetch = !isLoading && Boolean(error);

  const isDataArrayEmpty =  !isLoading && !isFailedToFetch && Array.isArray(data) ? data.length === 0 : false;

  const noDataFound = !isLoading && !isFailedToFetch && (data === undefined || data === null || isDataArrayEmpty);

  const canRenderData = !isLoading && !isFailedToFetch && !isDataArrayEmpty && !noDataFound;

  return {
    isFailedToFetch, isDataArrayEmpty, noDataFound, canRenderData,
  };
}
