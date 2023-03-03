import { useContext } from 'react';
import { LoaderContext } from '../contexts/LoaderContext';

export function useLoader () {
  return useContext(LoaderContext);
}
