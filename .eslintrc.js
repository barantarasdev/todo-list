module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['react'],
  rules: {
    'no-undef': 'off',
    'react/react-in-jsx-scope': 'off',
    indent: 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
