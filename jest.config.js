module.exports = {
  verbose: true,
  moduleNameMapper: {
    '\\.(css|less)$': `<rootDir>/src/mocks/css/styleMock.js`,
  },
  setupFilesAfterEnv: [`./src/test-init.js`],
  snapshotSerializers: [`./node_modules/enzyme-to-json/serializer`],
};
