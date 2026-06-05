import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import About from '~/pages/about';

import SiteHeader from '~/components/site-header';
import MobileNav from '~/components/mobile-nav';

const App = () => {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Navigate to="/#projects" replace />} />
      </Routes>
      <MobileNav />
    </BrowserRouter>
  );
};

export default App;
