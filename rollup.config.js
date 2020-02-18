import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import cleanup from 'rollup-plugin-cleanup';
import replace from 'rollup-plugin-replace';
import svgrPlugin from '@svgr/rollup';
import pkg from './package.json';

// This list includes common plugins shared between each output format.
// NOTE: the order of the plugins is important!
const configureRollupPlugins = (options = {}) =>
  [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.npm_package_version': JSON.stringify(process.env.npm_package_version),
    }),
    resolve(),
    babel({
      exclude: ['node_modules/**'],
      runtimeHelpers: true,
    }),
    // To convert CJS modules to ES6
    commonjs({
      include: 'node_modules/**',
    }),
    // To convert JSON files to ES6
    json(),
    // To convert SVG Icons to ES6
    svgrPlugin({
      // NOTE: only the files ending with `.react.svg` are supposed to be
      // converted to React components
      include: ['**/*.react.svg'],
      icon: false,
      svgoConfig: {
        plugins: [
          { removeViewBox: false },
          // Keeps ID's of svgs so they can be targeted with CSS
          { cleanupIDs: false },
        ],
      },
    }),
    // To remove comments, trim trailing spaces, compact empty lines,
    // and normalize line endings
    cleanup(),
  ].filter(Boolean);

const deps = Object.keys(pkg.dependencies || {});
const peerDeps = Object.keys(pkg.peerDependencies || {});
const defaultExternal = deps.concat(peerDeps);

// We need to define 2 separate configs (`esm` and `cjs`) so that each can be
// further customized.
const config = [
  {
    input: 'packages/design-system/index.js',
    external: defaultExternal,
    output: {
      file: pkg.main,
      format: 'cjs',
    },
    plugins: configureRollupPlugins(),
  },
  {
    input: 'packages/design-system/index.js',
    external: defaultExternal,
    output: {
      file: pkg.module,
      format: 'esm',
    },
    plugins: configureRollupPlugins({
      babel: {
        plugins: [
          [
            'yarn add ',
            {
              replacements: [{ original: 'lodash', replacement: 'lodash-es' }],
            },
          ],
        ],
      },
      sizeSnapshot: true,
    }),
  },
];

export default config;
