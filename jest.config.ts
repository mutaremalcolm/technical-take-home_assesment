/* eslint-env jest */

import  {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  setupFilesAfterEnv: [
    "/Users/malcom/technical-take-home_assesment"
  ]
};

export default config;