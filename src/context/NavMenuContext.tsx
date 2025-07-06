import { createContext, useState } from 'react';

type NavMenuContextType = {
  isNavMenu: boolean;
  // toggleNavMenu: () => void;
  openNavMenu: () => void;
  closeNavMenu: () => void;
};

const initialState = {
  isNavMenu: false,
  // toggleNavMenu: () => {}
  openNavMenu: () => {},
  closeNavMenu: () => {}
};

const NavMenuContext = createContext<NavMenuContextType>(initialState);

function NavMenuProvider({ children }: { children: React.ReactNode }) {
  const [isNavMenu, setIsNavMenu] = useState(false);

  const openNavMenu = () => setIsNavMenu(true);
  const closeNavMenu = () => setIsNavMenu(false);

  return (
    <NavMenuContext.Provider value={{ isNavMenu, openNavMenu, closeNavMenu }}>
      {children}
    </NavMenuContext.Provider>
  );
}

export { NavMenuProvider, NavMenuContext };
