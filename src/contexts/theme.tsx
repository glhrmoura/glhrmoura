import { useState, createContext, useContext, useEffect } from 'react';

import { Theme } from '~/types/theme';

interface ThemeContextProps {
  theme: string;
  isDark: boolean;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: '',
  isDark: true,
  setTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, defineTheme] = useState<string>(Theme.Dark);
  const [isDark, setIsDark] = useState(theme === Theme.Dark);

  const setTheme = (theme: string) => {
    defineTheme(theme)
  };

  useEffect(() => {
    setIsDark(theme === Theme.Dark);
  }, [theme]);

  const value = {
    theme,
    isDark,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
};

export const useTheme = () => {
  return useContext(ThemeContext);
}