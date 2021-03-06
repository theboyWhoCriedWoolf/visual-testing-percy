module.exports = {
  launch: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
  server: {
    command: 'cross-env NODE_ENV=production node visual-testing-app/server.js',
    port: 3001,
  },
};
