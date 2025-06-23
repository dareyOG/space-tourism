import { Outlet } from 'react-router-dom';

import Logo from './Logo';
import NavBar from './NavBar';
import NavMenu from './NavMenu';
import HamburgerMenu from './HamburgerMenu';

function AppLayout() {
  return (
    <div className="h-full bg-bg-home md:bg-bg-home_tablet lg:bg-bg-home_desktop bg-center bg-cover bg-no-repeat grid grid-rows-[repeat(auto,1fr)]">
      <header className="flex items-center justify-between py-[2.4rem] md:gap-x-[4.8rem] lg:px-0 w-full lg:pt-[4rem] border border-transparent">
        <div className="pl-[2.4rem] md:pl-[4rem]">
          <Logo />
        </div>

        <div className="pr-[2.4rem] md:pr-0">
          <HamburgerMenu />
          <NavBar />
          <NavMenu />
        </div>
      </header>
      {/* content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
