import { useContext } from 'react';
import HamburgerMenu from './HamburgerMenu';
import Logo from './Logo';
import NavBar from './NavBar';
import NavMenu from './NavMenu';
import { NavMenuContext } from '../context/NavMenuContext';

function Navigation() {
  const { isNavMenu } = useContext(NavMenuContext);

  return (
    <header className="flex items-center justify-between pt-[2.4rem] md:gap-x-[4.8rem] lg:px-0 w-full lg:pt-[4rem] ">
      <div className="pl-[2.4rem] md:pl-[4rem]">
        <Logo />
      </div>

      <div className="pr-[2.4rem] md:pr-0">
        <HamburgerMenu />
        <NavBar />
        {isNavMenu && <NavMenu />}
      </div>
    </header>
  );
}

export default Navigation;
