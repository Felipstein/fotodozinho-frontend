import { IconDefaultProps } from './icons.types';

export const EyeClosedIcon: React.FC<IconDefaultProps> = ({ color = 'currentColor', size = 32 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 5L26 27" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.3625 19.7C18.4449 20.5406 17.2444 21.0047 16 21C14.9908 20.9999 14.0053 20.6944 13.173 20.1237C12.3407 19.553 11.7005 18.7438 11.3367 17.8025C10.9729 16.8612 10.9024 15.8318 11.1346 14.8497C11.3668 13.8676 11.8907 12.9788 12.6375 12.3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.25 8.575C4.15 11.15 2 16 2 16C2 16 6 25 16 25C18.3432 25.0191 20.6572 24.4792 22.75 23.425" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.075 21.1375C28.8 18.7 30 16 30 16C30 16 26 7 16 7C15.133 6.99829 14.2675 7.06937 13.4125 7.2125" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.9375 11.0875C18.0008 11.289 18.9697 11.8308 19.6981 12.6313C20.4264 13.4318 20.8746 14.4474 20.975 15.525" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
