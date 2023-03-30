import { IconDefaultProps } from './icons.types';

export const NotificationIcon: React.FC<IconDefaultProps> = ({ color = 'currentColor', size = 32 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.52502 13.0001C7.52335 11.8146 7.75625 10.6405 8.2103 9.54534C8.66435 8.45021 9.33058 7.45573 10.1706 6.61918C11.0106 5.78263 12.0079 5.12054 13.1049 4.67105C14.2019 4.22156 15.377 3.99354 16.5625 4.00014C21.5125 4.03764 25.475 8.15014 25.475 13.1126V14.0001C25.475 18.4751 26.4125 21.0751 27.2375 22.5001C27.3251 22.6519 27.3713 22.824 27.3715 22.9993C27.3716 23.1745 27.3258 23.3467 27.2384 23.4986C27.151 23.6505 27.0253 23.7768 26.8738 23.8648C26.7223 23.9529 26.5503 23.9995 26.375 24.0001H6.62502C6.44978 23.9995 6.27778 23.9529 6.12625 23.8648C5.97472 23.7768 5.84899 23.6505 5.76163 23.4986C5.67428 23.3467 5.62839 23.1745 5.62854 22.9993C5.6287 22.824 5.6749 22.6519 5.76252 22.5001C6.58752 21.0751 7.52502 18.4751 7.52502 14.0001V13.0001Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 24V25C12.5 26.0609 12.9214 27.0783 13.6716 27.8284C14.4217 28.5786 15.4391 29 16.5 29C17.5609 29 18.5783 28.5786 19.3284 27.8284C20.0786 27.0783 20.5 26.0609 20.5 25V24" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
