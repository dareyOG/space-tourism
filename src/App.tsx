import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
