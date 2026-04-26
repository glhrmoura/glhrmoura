import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from '~/pages/about';
import Projects from '~/pages/projects';

import SiteHeader from '~/components/site-header';
import MobileNav from '~/components/mobile-nav';

const App = () => {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <MobileNav />
    </BrowserRouter>
  );
};

export default App;
