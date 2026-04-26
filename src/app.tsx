import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from '~/pages/About';
import Projects from '~/pages/Projects';

import Header from '~/components/Header';
import BottomNav from '~/components/BottomNav';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <BottomNav />
    </BrowserRouter>
  );
};

export default App;
