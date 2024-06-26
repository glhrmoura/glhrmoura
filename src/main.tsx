import React from 'react';

import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';

import App from '~/app';

import { ThemeProvider } from '~/contexts/theme';

import { i18n } from '~/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
