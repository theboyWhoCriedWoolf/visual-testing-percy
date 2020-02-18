module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.visualspec\\.js$',
  moduleNameMapper: {
    '@test(.*)$': '<rootDir>/test/$1',
  },
  globals: {
    HOST: 'http://localhost:3001',
  },
};
