const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  entry: {
    app1: './src/app1.js',
    app2: './src/app2.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { exclude: ['.gitignore'] }),
    new MiniCssExtractPlugin()
  ],
  module:
  {
    rules: [{
      test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']
      //test: /\.css$/, use: ['style-loader', 'css-loader']
    }],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 1,
          enforce: true
        }
      }
    }
  },
  resolve: {
    modules: ['src','node_modules']
  },
};
