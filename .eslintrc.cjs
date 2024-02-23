module.exports = {
  root: true,
  extends: require.resolve('eslint-plugin-airbnb-react'),
  globals: {
    React: false,
  },
  settings: {
    'react': {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
      alias: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
    'import/order': ['error'],
  },
  rules: {
    'react/no-unused-prop-types': [0],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',
    'react/no-unstable-nested-components': 'off',
    'react/jsx-no-bind': 'off',
    'no-unsafe-optional-chaining': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'default-param-last': 'off',
    'no-promise-executor-return': 'off',
    'react/function-component-definition': 'off',
    'no-dupe-else-if': 'off',
  },
}
