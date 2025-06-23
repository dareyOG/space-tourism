import { LucideMenu } from 'lucide-react';

function HamburgerMenu({ toggleNavMenu }: { toggleNavMenu: () => void }) {
  return (
    <button onClick={toggleNavMenu} className="md:hidden">
      <LucideMenu />
    </button>
  );
}

export default HamburgerMenu;
