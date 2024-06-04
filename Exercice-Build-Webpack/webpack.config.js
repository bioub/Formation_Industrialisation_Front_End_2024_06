const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
const config = {
  entry: './src/js/index.js',
  output: {
    clean: true,
    filename: 'app.[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    })
  ]
};

module.exports = config;
