const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProvidePlugin } = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'public/build'),
  },

  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new ProvidePlugin({ React: 'react' }),
  ],

  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
      },
      {
        test: /\.png|svg|jpg|gif|jpeg$/,
        use: ['file-loader'],
      },
    ],
  },
};
