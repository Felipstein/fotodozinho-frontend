import { IconDefaultProps } from './icons.types';

export const UserListIcon: React.FC<IconDefaultProps> = ({ color = 'currentColor', size = 32 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 18C12.7614 18 15 15.7614 15 13C15 10.2386 12.7614 8 10 8C7.23858 8 5 10.2386 5 13C5 15.7614 7.23858 18 10 18Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 10H31" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 16H31" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 22H31" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.25 24.0001C2.6906 22.2792 3.6914 20.754 5.09462 19.6648C6.49784 18.5756 8.22366 17.9844 10 17.9844C11.7763 17.9844 13.5022 18.5756 14.9054 19.6648C16.3086 20.754 17.3094 22.2792 17.75 24.0001" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
