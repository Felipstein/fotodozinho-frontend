import { IconDefaultProps } from './icons.types';

export const SmileySad: React.FC<IconDefaultProps> = ({ color = 'currentColor', size = 32 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.2625 15C18.5439 15.3151 18.8886 15.5672 19.2742 15.7398C19.6598 15.9124 20.0775 16.0016 20.5 16.0016C20.9224 16.0016 21.3401 15.9124 21.7257 15.7398C22.1113 15.5672 22.456 15.3151 22.7374 15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.26245 15C9.54386 15.3151 9.88864 15.5672 10.2742 15.7398C10.6598 15.9124 11.0775 16.0016 11.5 16.0016C11.9224 16.0016 12.3401 15.9124 12.7257 15.7398C13.1113 15.5672 13.456 15.3151 13.7375 15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.3125 23C18.3308 22.348 17.1785 22.0002 16 22.0002C14.8215 22.0002 13.6692 22.348 12.6875 23" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27.0001 6.0375C27.002 5.8744 26.9634 5.71337 26.8879 5.5688C26.8124 5.42422 26.7022 5.30061 26.5673 5.20899C26.4324 5.11737 26.2768 5.06061 26.1146 5.04377C25.9523 5.02694 25.7885 5.05055 25.6376 5.1125C23.7501 5.8375 20.1126 7 16.0001 7C11.8876 7 8.25007 5.8375 6.36257 5.1125C6.21168 5.05055 6.0478 5.02694 5.88556 5.04377C5.72332 5.06061 5.56778 5.11737 5.43283 5.20899C5.29789 5.30061 5.18773 5.42422 5.11221 5.5688C5.0367 5.71337 4.99817 5.8744 5.00007 6.0375V13C5.00007 21.8375 9.92507 29 16.0001 29C22.0751 29 27.0001 21.8375 27.0001 13V6.0375Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
