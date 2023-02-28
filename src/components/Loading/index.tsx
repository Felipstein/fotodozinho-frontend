import { MoonLoader } from 'react-spinners';
import { LoadingProps } from './types';

export const Loading: React.FC<LoadingProps> = ({ size = 24, color }) => {
  return (
    <MoonLoader size={size} color={color} />
  );
};
