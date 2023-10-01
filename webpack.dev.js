const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common,{
    mode: 'development', // for development, disable when production
    entry: {
    index: './src/index.js',
    },
    devtool: 'inline-source-map', // allows to track error
    devServer: { // for webpack dev server
        static: './dist',
      },
    plugins: [ // plugins
    new HtmlWebpackPlugin({
        title: 'Output Management', // html tab title
    }),
    ],
    output: {
    //filename: 'main.js',
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // cleans dist after build
    },
    optimization: { 
        usedExports: true, // tree shaking
        moduleIds: 'deterministic', // to prevent vendor hash names to be changed
        runtimeChunk: 'single', // for web dev server, also for more than 1 entry point
        splitChunks: { // for code splitting and cache
            cacheGroups: {
                vendor: {
                  test: /[\\/]node_modules[\\/]/,
                  name: 'vendors',
                  chunks: 'all',
                },
              },
       
          },
      },
    
});