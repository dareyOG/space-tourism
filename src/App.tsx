import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Crew from './pages/crew';
import Destination from './pages/destination';
import Technology from './pages/technology';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './components/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to={'home'} />} />
          <Route path="home" element={<Home />} />
          <Route path="crew/:role" element={<Crew />} />
          <Route path="destination/:name" element={<Destination />} />
          <Route path="technology/:name" element={<Technology />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
