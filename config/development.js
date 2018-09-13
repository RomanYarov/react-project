const config = require('./base.js');
const webpack = require('webpack');
const path = require('path');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const autoprefixer = require('autoprefixer');

config.module.rules.push(
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loaders: ['babel-loader', 'eslint-loader'],
  },
  {
    test: /\.scss$/,
    use: [
      ExtractCssChunks.loader,
      {
        loader: 'css-loader', 
        options: {
          importLoaders: 1,
          sourceMap: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            autoprefixer({
              browsers: ['ie >= 8', 'last 4 version'],
            }),
          ],
          sourceMap: true,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }
    ],
  },
);

config.plugins.push(
  new webpack.LoaderOptionsPlugin({
    options: {
      eslint: {
        configFile: './.eslintrc',
        fix: true,
      }
    }
  }),
  new ExtractCssChunks({
    filename: "styles.[hash].css",
    chunkFilename: "styles.[id].css",
    hot: true
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify("development")
    }
  })
);

// Set dev-server configuration
config.devServer = {
  port: 3000,
  host: 'localhost',
  contentBase: path.resolve(__dirname.split('/config')[0], 'dist'),
  compress: true,
  hot: true,
};

module.exports = config;