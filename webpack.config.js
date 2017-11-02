const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, '.', dir);
}

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
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            'components': resolve('src/client/components'),
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include: [ path.join(__dirname, 'src/client') ],
                options: {
                    presets: ['es2015', 'react', 'stage-0'],
                    plugins: [['import', { libraryName: 'antd', style: true}]]
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