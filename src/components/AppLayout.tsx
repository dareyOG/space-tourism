import { Outlet } from 'react-router-dom';
import { NavMenuProvider } from '../context/NavMenuContext';

import Navigation from './Navigation';
import Content from './Content';
import Main from './Main';

function AppLayout() {
  return (
    <NavMenuProvider>
      <Main>
        <div className="border border-default">
          <Navigation />
        </div>
        <div className="border border-default">
          <Content>
            <Outlet />
          </Content>
        </div>
      </Main>
    </NavMenuProvider>
  );
}

export default AppLayout;
