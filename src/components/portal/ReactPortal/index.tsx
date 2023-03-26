import ReactDOM from 'react-dom';

import { ReactPortalProps } from './types';

export const ReactPortal: React.FC<ReactPortalProps> = ({ containerId, children }) => {
  let container = document.getElementById(containerId);

  if(!container) {
    container = document.createElement('div');
    container.setAttribute('id', containerId);
    document.body.appendChild(container);
  }

  return ReactDOM.createPortal(children, container);
};
