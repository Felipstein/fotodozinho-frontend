import defaultLogo from '/logo.png';
import whiteLogo from '/white-logo.png';

import { LogoTypes } from './types';

export const Logo: React.FC<LogoTypes> = ({ scale = 1, isWhite = false }) => {
  const logo = isWhite ? whiteLogo : defaultLogo;

  return (
    <img src={logo} alt="Foto do Zinho Logo" width={362 * scale} height={181 * scale} />
  );
};
