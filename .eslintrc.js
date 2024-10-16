module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    // Убедитесь, что вы убрали 'plugin:react/recommended', если не используете React
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  globals: {
    module: 'readonly',  // Добавлено для использования module
    require: 'readonly',  // Добавлено для использования require
    __dirname: 'readonly', // Добавлено для использования __dirname
    test: 'readonly',      // Добавлено для использования test
    expect: 'readonly',    // Добавлено для использования expect
    beforeEach: 'readonly', // Добавлено для использования beforeEach
    jest: 'readonly',      // Добавлено для использования jest
  },
  rules: {
    // Ваши пользовательские правила здесь
  },
};
