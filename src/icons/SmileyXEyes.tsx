import { IconDefaultProps } from './icons.types';

export const SmileyXEyes: React.FC<IconDefaultProps> = ({ color = 'currentColor', size = 32 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke={color} strokeWidth="2" strokeMiterlimit="10"/>
      <path d="M23 12L19 16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23 16L19 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 12L9 16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 16L9 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 24C16.8284 24 17.5 23.3284 17.5 22.5C17.5 21.6716 16.8284 21 16 21C15.1716 21 14.5 21.6716 14.5 22.5C14.5 23.3284 15.1716 24 16 24Z" fill={color}/>
    </svg>
  );
};
