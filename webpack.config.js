const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ProvidePlugin} = require('webpack');
const path = require("path");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html"}),
    new ProvidePlugin({ React: 'react', Style: 'styled-components' })
  ],

  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
    ],
  },
};