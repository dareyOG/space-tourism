import { LucideMenu } from 'lucide-react';
import { useContext } from 'react';
import { NavMenuContext } from '../context/NavMenuContext';

function HamburgerMenu() {
  const { openNavMenu } = useContext(NavMenuContext);
  return (
    <button onClick={openNavMenu} className="md:hidden">
      <LucideMenu />
    </button>
  );
}

export default HamburgerMenu;
