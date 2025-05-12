module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/fileTransformer.js'
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/admin/src/$1'
  },
  modulePathIgnorePatterns: ['<rootDir>/frontend']
};
