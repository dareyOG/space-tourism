import { createContext, useState } from 'react';

type NavMenuContextType = {
  isNavMenu: boolean;
  toggleNavMenu: () => void;
};

const initialState = {
  isNavMenu: false,
  toggleNavMenu: () => {}
};

const NavMenuContext = createContext<NavMenuContextType>(initialState);

function NavMenuProvider({ children }: { children: React.ReactNode }) {
  const [isNavMenu, setIsNavMenu] = useState(false);

  const toggleNavMenu = () => setIsNavMenu(navMenu => !navMenu);
  return (
    <NavMenuContext.Provider value={{ isNavMenu, toggleNavMenu }}>
      {children}
    </NavMenuContext.Provider>
  );
}

export { NavMenuProvider, NavMenuContext };
