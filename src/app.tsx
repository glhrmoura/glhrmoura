import { ThemeProvider as StyledProvider } from 'styled-components';

import { useTheme } from '~/contexts/theme';

import '~/i18n';

import Home from '~/pages/Home';

import GlobalStyles from '~/theme/global';
import { dark, light } from '~/theme/theme';

import Header from '~/components/Header';

const App = () => {
  const { isDark } = useTheme()

  return (
    <StyledProvider theme={isDark ? dark : light}>
      <GlobalStyles />
      <Header />
      <Home />
    </StyledProvider>
  );
};

export default App;