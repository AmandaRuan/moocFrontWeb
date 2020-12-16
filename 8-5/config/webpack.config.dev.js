const webpackMerge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.config.base')

const webpackConfig = webpackMerge(baseWebpackConfig, {
    mode: 'development',
    //每个module会通过eval()来执行，并且生成一个DataUrl形式的SourceMap.
    devtool: 'eval-source-map',
    stats: { children: false }
})

