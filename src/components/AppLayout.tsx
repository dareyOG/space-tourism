// import NavBar from './NavMenu';

import logo from '../assets/shared/logo.svg';
import { Outlet } from 'react-router-dom';
import { LucideMenu } from 'lucide-react';

function AppLayout() {
  return (
    <div className="bg-bg-home bg-center bg-cover bg-no-repeat h-screen flex flex-col">
      <header className="flex items-center justify-between p-[2.4rem]">
        <img src={logo} alt="Logo" />

        <button
          onClick={() => {
            console.log('clicked menu bar');
          }}
        >
          <LucideMenu />
        </button>
      </header>
      <main className="p-[2.4rem]">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
