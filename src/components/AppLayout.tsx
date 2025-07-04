import { Outlet } from 'react-router-dom';
import { NavMenuProvider } from '../context/NavMenuContext';

import Navigation from './Navigation';
import Content from './Content';
import Main from './Main';

function AppLayout() {
  return (
    <NavMenuProvider>
      <Main>
        <Navigation />

        <Content>
          <Outlet />
        </Content>
      </Main>
    </NavMenuProvider>
  );
}

export default AppLayout;
