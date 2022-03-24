import { createContext } from 'react';

interface ContexProps {
  sidemenuOpen: boolean;

  //Methods
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const UIContext = createContext({} as ContexProps);
