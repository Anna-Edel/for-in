const path = require('path');

module.exports = {
  entry: './src/index.js', // Входная точка
  output: {
    filename: 'bundle.js', // Имя выходного файла
    path: path.resolve(__dirname, 'dist'), // Путь для выходного файла
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Обработка файлов .js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Используем Babel для транспиляции
        },
      },
      {
        test: /\.css$/, // Обработка файлов .css
        use: ['style-loader', 'css-loader'], // Загружаем CSS
      },
      // Другие правила для обработки других типов файлов (например, изображений, шрифтов и т.д.)
    ],
  },
  mode: 'development', // Режим разработки
};
