module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.visualspec\\.js$',
  moduleNameMapper: {
    '@test(.*)$': '<rootDir>/test/$1',
  },
};
