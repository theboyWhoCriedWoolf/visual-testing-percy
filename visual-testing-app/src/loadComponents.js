// const storybookStories = require.context('../../packages/components', true, /\.stories\.js$/);
const percyStories = require.context('../../packages/components', true, /\.percy\.js$/);

const allComponents = percyStories.keys().reduce((components, file) => {
  const Comp = percyStories(file);

  if (!Comp.routePath) {
    // get route from routePath or title
    Comp.routePath = Comp.routePath ? Comp.routePath.substring(1) : `/${Comp.default.title}`;
  }

  // // trim leading slash
  const label = Comp.routePath;
  if (components[label]) {
    // eslint-disable-next-line no-console
    console.error(`Duplicate route generated for: /${label}`);
  }
  // eslint-disable-next-line no-param-reassign
  components[label] = Comp;

  return components;
}, {});

export default () => allComponents;
