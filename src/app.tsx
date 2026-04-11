import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider as StyledProvider } from 'styled-components';

import { useTheme } from '~/contexts/theme';

import About from '~/pages/About';
import Projects from '~/pages/Projects';

import GlobalStyles from '~/theme/global';
import { dark, light } from '~/theme/theme';

import Header from '~/components/Header';
import BottomNav from '~/components/BottomNav';

const App = () => {
  const { isDark } = useTheme();

  return (
    <BrowserRouter>
      <StyledProvider theme={isDark ? dark : light}>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <BottomNav />
      </StyledProvider>
    </BrowserRouter>
  );
};

export default App;
