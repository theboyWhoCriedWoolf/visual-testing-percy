import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const node = document.getElementById('app');
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  node,
);
