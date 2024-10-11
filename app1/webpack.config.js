const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('@module-federation/enhanced').ModuleFederationPlugin;
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'production',
  devtool: false,
  target: 'web',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3001,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app1',
      filename: 'remoteEntry.js',
      shared: {
        react: {
          version: "16.14.0",
          singleton: true,
        },
        'react-dom': {
          version: "16.14.0",
          singleton: true,
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
