const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    entry: {
        app: [ 'webpack-hot-middleware/client?reload=1', './src/client/index.js' ]
    },
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include: [ path.join(__dirname, 'src/client') ],
                options: {
                    presets: ['es2015', 'react'],
                }
            },
            {
                test: /\.less$/,
                use: [
                    {loader: 'style-loader'}, 
                    {loader: 'css-loader'}, 
                    {loader: 'less-loader'}
                ]
            }
        ]
    }
  }