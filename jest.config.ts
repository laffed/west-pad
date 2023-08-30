import type { Config } from 'jest';

const config: Config = {
  preset: "ts-jest",
  extensionsToTreatAsEsm: ['.ts'],
  testEnvironment: "node",
  verbose: true,
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        useESM: true
      }
    ]
  },
  collectCoverageFrom: [
    'src/**/*.{ts}'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};

export default config;
