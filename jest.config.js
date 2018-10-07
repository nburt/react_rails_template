module.exports = {
  rootDir: 'app/javascript/',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(scss|css)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: [
    'js'
  ],
  moduleDirectories: [
    'node_modules',
    'app'
  ],
  testMatch: [
    '<rootDir>/bundles/**/*.spec.js'
  ],
  setupTestFrameworkScriptFile: '<rootDir>/setupTests.js',
  "testURL": "http://localhost/",
  "globals": {
    "API_HOST": "http://localhost:3000"
  }
};
