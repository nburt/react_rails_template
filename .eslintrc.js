module.exports = {
  'extends': ['airbnb', 'plugin:flowtype/recommended'],
  'plugins': ['flowtype'],
  'rules': {
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'no-cond-assign': ['error', 'always'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/prefer-stateless-function': [0],
    'react/prop-types': [0],
    'jsx-a11y/label-has-for': [{ 'required': { 'every': ['id'] } }],
    'quote-props': ['error', 'as-needed', { 'numbers': true }],
    'import/no-extraneous-dependencies': ['error', {'devDependencies': ['**/*.spec.js', '**/*.stories.js']}]
  },
  'globals': {
    'document': false,
    'describe': false,
    'it': false,
    'beforeEach': false,
    'afterEach': false,
    'fetch': false,
    'sinon': false,
    'window': false,
    'Headers': false,
    'Image': false,
    'MutationObserver': false,
    'TimeoutID': true,
    'IntervalID': true,
    'Audio': true,
    'URL': true,
    'jest': true
  }
};
