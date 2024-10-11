const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('@module-federation/enhanced').ModuleFederationPlugin;
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devtool: false,
  target: 'web',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3002,
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
      name: 'app0', // make it lower
      filename: 'remoteEntry.js',
      exposes: {
        './Widget': './src/Widget'
      },
      shared: {
        react: {
          // now I have to mark version higher e.g. "18.0.0" to use the development version of "react"
          version: "16.14.0", 
          singleton: true,
          eager: true, // wont work
        },
        'react-dom': {
          // now I have to mark version higher e.g. "18.0.0" to use the development version of "react-dom"
          version: "16.14.0", 
          singleton: true,
          eager: true, // wont work
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
