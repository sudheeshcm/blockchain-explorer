require('dotenv').config();

const config = {
  rootDir: '../',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js',
    '\\.(s?css)$': '<rootDir>/src/__mocks__/styleMock.js',
    '@Components(.*)$': '<rootDir>/src/components/$1',
    '@Constants(.*)$': '<rootDir>/src/constants/$1',
    '@Helpers(.*)$': '<rootDir>/src/helpers/$1',
    '@Scenes(.*)$': '<rootDir>/src/scenes/$1',
    '@Services(.*)$': '<rootDir>/src/services/$1',
    '@Root(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: ['<rootDir>/testUtils/setup.js'],
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'BPaaS Unit Test Report',
        includeFailureMsg: true,
        outputPath: 'reports/test-report.html',
      },
    ],
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '/testUtils/'],
};

module.exports = config;
