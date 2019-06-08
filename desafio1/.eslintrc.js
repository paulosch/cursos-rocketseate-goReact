module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': 'standard',
  'globals': {
    'Atomics': 'readable',
    'SharedArrayBuffer': 'readable'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
      'js': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
  }
}
