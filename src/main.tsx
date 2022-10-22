import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { GdsThemeProvider } from '@gdsc-dju/styled-components-theme';

import App from './App';
import GlobalStyles from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GdsThemeProvider mode={'light-only'}>
        <GlobalStyles />
        <App />
      </GdsThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
