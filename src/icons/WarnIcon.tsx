import { IconDefaultProps } from './icons.types';

export const WarnIcon: React.FC<IconDefaultProps> = ({ color = 'currentColor' }) => {
  return (
    <svg className='app-icon warn' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 22.75C18.3848 22.75 22.75 18.3848 22.75 13C22.75 7.61522 18.3848 3.25 13 3.25C7.61522 3.25 3.25 7.61522 3.25 13C3.25 18.3848 7.61522 22.75 13 22.75Z" stroke={color} strokeWidth="1.625" strokeMiterlimit="10" />
      <path d="M13 8.125V13.8125" stroke={color} strokeWidth="1.625" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 18.6875C13.6731 18.6875 14.2188 18.1418 14.2188 17.4688C14.2188 16.7957 13.6731 16.25 13 16.25C12.3269 16.25 11.7812 16.7957 11.7812 17.4688C11.7812 18.1418 12.3269 18.6875 13 18.6875Z" fill={color} />
    </svg>
  );
};
