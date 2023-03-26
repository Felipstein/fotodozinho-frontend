/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createContext, ReactNode, useState } from 'react';
import { SplashScreen } from '../components/layout/SplashScreen';

interface LoaderContextProps {
  isVisible: boolean;
  isLoading: boolean;
  loadingMessage?: string;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setLoadingMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
}

interface LoaderProviderProps {
  children: ReactNode;
}

// @ts-ignore
export const LoaderContext = createContext<LoaderContextProps>();

export const LoaderProvider: React.FC<LoaderProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState<string | undefined>();

  return (
    <LoaderContext.Provider value={{
      isVisible,
      isLoading,
      loadingMessage,
      setIsVisible,
      setIsLoading,
      setLoadingMessage,
    }}>
      <SplashScreen
        visible={isVisible}
        isLoading={isLoading}
        loadingMessage={loadingMessage}
      />
      {children}
    </LoaderContext.Provider>
  );
};
