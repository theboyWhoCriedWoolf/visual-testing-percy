import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';

const node = document.getElementById('app');
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={{ mode: 'light' }}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  node,
);
