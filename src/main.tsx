import React, { useState } from 'react';

import ReactDOM from 'react-dom/client';
import { useTranslation } from "react-i18next";
import { ThemeProvider } from 'styled-components';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { langList } from '~/data';

import '~/i18n';

import Home from '~/pages/Home';

import { Header, LangItem, LangList, HeaderContainer } from './styles';

import GlobalStyles from '~/theme/global';
import { dark, light } from '~/theme/theme';

const App = () => {
  const { i18n } = useTranslation();

  const [theme, setTheme] = useState('dark');
  const isDark = theme === 'dark';
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const isEqualLang = (langA: string, langB: string) => {
    return langA?.toLocaleLowerCase() === langB?.toLocaleLowerCase()
  };

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <HeaderContainer>
        <Header>
          <LangList>
            {langList.map((lang) => (
              <LangItem
                key={lang.value}
                onClick={() => changeLang(lang.value)}
                $selected={isEqualLang(lang.value, i18n.language)}
              >
                {lang.title}
              </LangItem>
            ))}
          </LangList>
          <DarkModeSwitch
            size={18}
            checked={isDark}
            onChange={toggleTheme}
          />
        </Header>
      </HeaderContainer>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
