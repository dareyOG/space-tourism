import { Outlet } from 'react-router-dom';

import Logo from './Logo';
import NavBar from './NavBar';
import NavMenu from './NavMenu';
import HamburgerMenu from './HamburgerMenu';
import { useState } from 'react';

function AppLayout() {
  const [isNavMenu, setIsNavMenu] = useState(false);

  const toggleNavMenu = () => setIsNavMenu(navMenu => !navMenu);

  return (
    <div className="grid grid-rows-[auto_1fr] ">
      {/* <div className="absolute top-0 left-0 right-0"> */}
      <header className="flex relative z-10 items-center justify-between pt-[2.4rem] md:gap-x-[4.8rem] lg:px-0 w-full lg:pt-[4rem] ">
        <div className="pl-[2.4rem] md:pl-[4rem]">
          <Logo />
        </div>

        <div className="pr-[2.4rem] md:pr-0">
          <HamburgerMenu toggleNavMenu={toggleNavMenu} />
          <NavBar />
          {isNavMenu && <NavMenu toggleNavMenu={toggleNavMenu} />}
        </div>
      </header>
      {/* content */}
      <main className="h-screen">
        <Outlet />
      </main>
      {/* </div> */}
    </div>
  );
}

export default AppLayout;
