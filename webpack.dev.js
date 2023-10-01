const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common,{
    mode: 'development', // for development, disable when production
    devtool: 'inline-source-map', // allows to track error
    devServer: { // for webpack dev server
        static: './dist',
      },
    
   
    
    
});