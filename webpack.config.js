const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.(js)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  }
};