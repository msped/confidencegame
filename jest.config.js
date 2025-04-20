/** @type {import('ts-jest').JestConfigWithTsJest} **/

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    // Use babel-jest to transpile tests with the current Next.js babel config
    // This is important for supporting features like CSS modules
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      {
        presets: [['next/babel', { presets: ['@babel/preset-typescript'] }]],
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};