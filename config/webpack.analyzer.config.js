const merge = require('webpack-merge');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const genProConfig = require('./webpack.pro.config.js');

const rootDir = path.resolve(__dirname, '..');

module.exports = (env, argv) => {
    const proWebpackConfig = genProConfig(env, argv);

    return merge(proWebpackConfig, {
        plugins: [
            new BundleAnalyzerPlugin()
        ]
    });
};
