import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import centered from '@storybook/addon-centered/react';
import 'sanitize.css/sanitize.css';

const theme = {
  mode: 'light',
};

/**
 * Add decorators
 */
addDecorator(centered);

addDecorator(storyFn => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </React.StrictMode>
));
