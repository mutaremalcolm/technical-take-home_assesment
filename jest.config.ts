/* eslint-env jest */

import  {Config} from 'jest';

const config = {
  preset: 'ts-jest',
  verbose: true,
  setupFilesAfterEnv: [
    "<rootDir>/support/setupTests.js",
    "@testing-library/jest-dom/extend-expect"
  ]
};

export default config;