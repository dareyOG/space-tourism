import { useContext } from 'react';

import HamburgerMenu from './HamburgerMenu';
import Logo from './Logo';
import NavBar from './NavBar';
import NavMenu from './NavMenu';

import { NavMenuContext } from '../context/NavMenuContext';

function Navigation() {
  const { isNavMenu } = useContext(NavMenuContext);

  return (
    <header className="flex items-center justify-between pt-[2.4rem] md:gap-x-[4.8rem] lg:gap-0 lg:px-0 w-full lg:pt-[4rem] ">
      <div className="pl-[2.4rem] md:pl-[4rem] flex items-center gap-x-[6.4rem]">
        <Logo />
        <span className="hidden lg:flex h-[.1rem] w-[40vw] items-center bg-default opacity-25 absolute right-[45%] z-10"></span>
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
