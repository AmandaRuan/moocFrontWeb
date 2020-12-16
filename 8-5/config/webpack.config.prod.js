const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')

const TerserWebpackPlugin = webpackMerge(baseWebpackConfig, {
    mode: 'production',
    stats: {children: false, warnings: false},
    optimization: P{
        minimizer: [
            new TerserWebpackPlugin({
                terserOptions: {
                    warnings: false,
                    compress: {
                        warnings: false,
                        // 是否注释掉console
                        drop_console: false,
                        dead_code: true,
                        drop_debugger: true,
                    }, 
                    output: {
                        comments: false,
                        beautify: false,
                    },
                    mangle: true,
                },
                parallel: true,
                sourceMap: false,
            }),
          ]
    }
})