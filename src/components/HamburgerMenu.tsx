import { LucideMenu } from 'lucide-react';
import { useContext } from 'react';
import { NavMenuContext } from '../context/NavMenuContext';

function HamburgerMenu() {
  const { toggleNavMenu } = useContext(NavMenuContext);
  return (
    <button onClick={toggleNavMenu} className="md:hidden">
      <LucideMenu />
    </button>
  );
}

export default HamburgerMenu;
