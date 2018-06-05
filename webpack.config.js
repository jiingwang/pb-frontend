const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const argv = require('yargs').argv;
let output = {};
const devmode = argv.env;
if (devmode === 'prod') {
    output = {
        path: path.resolve(__dirname, './dist/'),
        publicPath: "/dist/",
        filename: '[name].[hash:8].js'
    };
} else {
    output = {
        path: path.resolve(__dirname, './dist/'),
        publicPath: "/",
        filename: '[name].js'
    };
}

module.exports = {
    mode: devmode === 'prod' ? 'production' : 'development',
    entry: './src/main.js',
    output: output,
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'vue-style-loader',
                        options: {}
                    },
                    {
                        loader: 'css-loader',
                        options: {}
                    },
                    {
                        loader: 'less-loader',
                        options: {}
                    }
                ]

            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    },
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }

        ]
    },

    resolve: {
        alias: [],
        extensions: [".js", ".vue"]
    },

    devtool: 'source-map',

    devServer: {
        port: 9000,
        index: 'index.html',
        contentBase: '/',
        proxy: {}
    },

    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: '明源云',
            filename: 'index.html',
            template: path.resolve(__dirname, 'template.html'),
            inject: true
        })
    ]

};