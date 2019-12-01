module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
};
