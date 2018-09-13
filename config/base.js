const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Set entry file
  entry: {
    main: [
      './src/index.js',
      './styles/index.scss',
    ],
    vendor: [
      'react',
      'react-dom',
    ]
  },

  // Resolve to output directory and set file
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss'],
  },
  output: {
    path: path.resolve(__dirname.split('/config')[0], 'dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[id].js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    })
  ],

  // Add babel-loader to transpile files
  module: {
    rules: []
  },

  // Set source maps are generated
  devtool: 'inline-source-map',
};