module.exports = {
  extends: ['airbnb', 'prettier', 'eslint:recommended', 'plugin:react/recommended'],
  plugins: ['prettier', 'react-hooks', 'react'],
  env: { browser: true },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to']
      }
    ],
    'react/jsx-filename-extension': 0,
    'linebreak-style': ['error', 'windows'],
    'comma-dangle': ['error', 'never'],
    'import/no-unresolved': 'off',
    'prettier/prettier': ['error'],
    'no-use-before-define': [2, { functions: false }],
    'import/no-named-as-default': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    // 'no-console': 'error',
    'react/jsx-one-expression-per-line': 0,
    'react/destructuring-assignment': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
    'react/prop-types': 0,
    'no-dupe-class-members': 'off',
    '@typescript-eslint/ban-ts-ignore': 0,
    'class-methods-use-this': 0,
    'import/extensions': 0
  }
};
