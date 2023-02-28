import { MoonLoader } from 'react-spinners';
import { LoadingProps } from './types';

export const Loading: React.FC<LoadingProps> = ({ size = 32, color }) => {
  return (
    <MoonLoader size={size} color={color} />
  );
};
