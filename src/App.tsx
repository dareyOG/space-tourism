import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Crew from './pages/crew';
import Destination from './pages/destination';
import Technology from './pages/technology';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/crew/:role" element={<Crew />} />
        <Route path="/destination/:name" element={<Destination />} />
        <Route path="/technology/:name" element={<Technology />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
