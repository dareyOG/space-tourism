import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Crew from './pages/crew';
import Destination from './pages/destination';
import Technology from './pages/technology';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './components/AppLayout';
import DestinationContent from './components/DestinationContent';
// import DestinationContent from './components/DestinationContent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="destination" element={<Destination />}>
            <Route index element={<Navigate to={'/destination/moon'} />} />
            <Route path={'moon'} element={<DestinationContent />} />
            <Route path={'mars'} element={<DestinationContent />} />
            <Route path={'europa'} element={<DestinationContent />} />
            <Route path={'titan'} element={<DestinationContent />} />
          </Route>
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
