/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, useCallback } from 'react';
import { APIError } from '../errors/APIError';

interface ServiceResponse<T> {
  data: T extends undefined ? T | null : T;
  isLoading: boolean;
  error: string | null;
  fetchDataAgain: () => void;
}

export function useService<T>(serviceFn: () => Promise<T>, initialValue?: T, startLoading = true): ServiceResponse<T> {
  const [isLoading, setIsLoading] = useState(Boolean(startLoading));
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(initialValue ? initialValue : null);

  const fetchData = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);

      const result = await serviceFn();
      setData(result);
    } catch (err: APIError | Error | any) {
      setError(err.message || 'Ocorreu um erro desconhecido, por favor, tente novamente. Se o erro persistir, entre em contato conosco pelo suporte.');
    } finally {
      setIsLoading(false);
    }
  }, [serviceFn]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, fetchDataAgain: fetchData };
}
