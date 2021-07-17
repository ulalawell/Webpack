const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 4000,
        hot: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
    plugins: [
        new FaviconsWebpackPlugin('src/assets/firefox-14-458281.png'),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new webpack.DefinePlugin({
            STUDENT: JSON.stringify('Usik Roman')
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new CssMinimizerPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(jpg|png|ttf|jpeg)$/,
                type: 'asset/resource',
            },
            {
                test: /\.txt$/i,
                use: 'raw-loader',
            },
            {
                test: /\.pcss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            }

        ]
    }
}



