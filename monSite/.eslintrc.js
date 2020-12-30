module.exports = {
  // undef: true, //dodane prze mnie
  env: {
    browser: true,
    es2021: true,

  },
  extends: [
    'airbnb-base',
    'gsap',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-plusplus': 'off',
    'prefer-arrow-callback': 'off',
    'no-var': 'on',
    'vars-on-top': 'off',
    'no-loop-func': 'off',
    'func-names': 'off',
    'no-restricted-syntax': 'off',
    'linebreak-style': 'off',
    'no-shadow': 'off',
    'no-console': 'off',
    'prefer-destructuring': 'off',
    'import/prefer-default-export': 'off',
  },

};
