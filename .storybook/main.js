const path = require('path');

module.exports = {
  stories: ['../packages/**/*.stories.js'],
  addons: ['@storybook/addon-viewport', '@storybook/addon-a11y', '@storybook/addon-knobs'],
  // webpackFinal: async config => {
  //   config.module.rules.push({
  //     test: /\.(ts|tsx)$/,
  //     loader: require.resolve('babel-loader'),
  //     options: {
  //       presets: [['react-app', { flow: false, typescript: true }]],
  //       plugins: ['styled-components'],
  //     },
  //   });

  //   config.resolve.extensions.push('.ts', '.tsx');

  //   return config;
  // },
};
