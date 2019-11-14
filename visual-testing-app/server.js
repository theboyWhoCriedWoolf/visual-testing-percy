const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const port = process.env.PORT || 3001;
const isDev = process.env.NODE_ENV === 'development';

app.use('/favicon.ico', (req, res) => {
  res.status(404).end();
});

function createWebpackMiddleware(compiler, publicPath) {
  return webpackDevMiddleware(compiler, {
    logLevel: 'warn',
    publicPath,
    silent: true,
    stats: 'errors-only',
  });
}

// Add dev middleware if required
if (isDev) {
  const webpackConfig = require('./webpack.config');
  const compiler = webpack(webpackConfig);
  const middleware = createWebpackMiddleware(compiler, webpackConfig.output.publicPath);

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  const fs = middleware.fileSystem;

  app.get('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      console.log(err);
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });
} else {
  app.use('/', express.static(`${__dirname}/dist/`, {}));

  app.use('*', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
  });
}

app.listen(port, () => {
  console.log(
    `[ ${
      isDev ? 'DEV' : 'PROD'
    } ] ⚡️ Example app running on http://localhost:${port} ← cmd + click to open`,
  );
});
