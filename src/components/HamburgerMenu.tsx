import { useContext } from 'react';

import { NavMenuContext } from '../context/NavMenuContext';

import { LucideMenu } from 'lucide-react';

function HamburgerMenu() {
  const { openNavMenu } = useContext(NavMenuContext);
  return (
    <button onClick={openNavMenu} className="md:hidden">
      <LucideMenu />
    </button>
  );
}

export default HamburgerMenu;
