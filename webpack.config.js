const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/client/index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    // plugins: [
    //       new webpack.optimize.OccurrenceOrderPlugin(),
    //       new webpack.HotModuleReplacementPlugin(),
    //       new webpack.NoEmitOnErrorsPlugin()
    // ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            include: [ path.join(__dirname, 'src/client') ],
            options: {
                presets: ['es2015', 'react'],
            }
        }]
    }
  }