import { Outlet } from 'react-router-dom';
import { NavMenuProvider } from '../context/NavMenuContext';

import Navigation from './Navigation';
import Main from './Main';

function AppLayout() {
  return (
    <NavMenuProvider>
      <Main>
        <Navigation />
        <>
          <Outlet />
        </>
      </Main>
    </NavMenuProvider>
  );
}

export default AppLayout;
