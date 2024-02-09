import  {Config} from 'jest';

const config = {
  preset: 'ts-jest',
  verbose: true,
  setupFilesAfterEnv: [
     "<rootDir>/src/setupTests.js",
    "@testing-library/jest-dom/extend-expect"
  ]
};

export default config;