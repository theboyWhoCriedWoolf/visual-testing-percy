// import { configure, addParameters, addDecorator } from '@storybook/react';
// import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// import { withA11y } from '@storybook/addon-a11y';

// addParameters({
//   options: {
//     brandTitle: '',
//     brandUrl: '',
//     isFullscreen: false,
//     panelPosition: 'right',
//     showNav: true,
//     showPanel: true,
//     showSearchBox: false,
//     sortStoriesByKind: true,
//   },
// });

// addParameters({
//   viewports: {
//     ...INITIAL_VIEWPORTS,
//   },
// });

const componentStories = require.context('../packages/components', true, /\.stories\.js$/);

// addDecorator(withA11y);

const componentsContext = require.context('../packages/components', true, /\.visualroute\.js$/);

const allComponents = componentStories.keys().reduce((components, file) => {
  const Comp = componentStories(file);

  // // trim leading slash
  const label = Comp.routePath ? Comp.routePath.substring(1) : Comp.default.title;
  if (components[label]) {
    // eslint-disable-next-line no-console
    console.error(`Duplicate route generated for: /${label}`);
  }
  // eslint-disable-next-line no-param-reassign
  components[label] = Comp;

  console.error('path >> ', label);

  return components;
}, {});

console.error('allComponents >> ', allComponents);

// configure([componentStories], module);
