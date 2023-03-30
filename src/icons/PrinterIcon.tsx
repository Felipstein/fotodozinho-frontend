import { IconDefaultProps } from './icons.types';

export const PrinterIcon: React.FC<IconDefaultProps> = ({ color = 'currentColor', size = 32 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 10V5H24V10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 19H8V27.5H24V19Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 22H3.5V12C3.5 10.9 4.475 10 5.6625 10H26.3375C27.525 10 28.5 10.9 28.5 12V22H24" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24.9375 14.5C24.9375 15.2939 24.2939 15.9375 23.5 15.9375C22.7061 15.9375 22.0625 15.2939 22.0625 14.5C22.0625 13.7061 22.7061 13.0625 23.5 13.0625C24.2939 13.0625 24.9375 13.7061 24.9375 14.5Z" fill={color} stroke={color} strokeWidth="0.125"/>
    </svg>
  );
};
