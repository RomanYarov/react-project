const config = require('./base.js');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

config.module.rules.push(
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        cacheDirectory: true,
      }
    },
  },
  {
    test: /\.scss$/,
    use: [
      'style-loader',
      MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          minimize: {
            discardComments: {
              removeAll: true
            },
          },
          module: true,
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            autoprefixer({
              browsers: ['ie >= 8', 'last 4 version']
            })
          ],
        }
      },
      'sass-loader',
    ],
  }
);

config.optimization = {
  minimizer: [
    new UglifyJsPlugin({
      uglifyOptions: {
        mangle: {
          keep_fnames: true,
        },
      },
    })
  ]
};

config.plugins.push(
  new MiniCssExtractPlugin({
    filename: 'styles.[contenthash].css',
  }),
  new OptimizeCssAssetsPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify("production")
    }
  })
);

module.exports = config;