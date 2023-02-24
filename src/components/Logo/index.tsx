import logo from '/logo.png';
import { LogoTypes } from './types';

export const Logo: React.FC<LogoTypes> = ({ scale = 1 }) => {

  return (
    <img src={logo} alt="Foto do Zinho Logo" width={362 * scale} height={181 * scale} />
  );
};
