import { join, resolve } from 'path';
// const htmlWebpackPlugin = require('html-webpack-plugin');
import HtmlWebpackPlugin from 'html-webpack-plugin';
export const entry = join(__dirname, "src", "index.js");
export const output = {
    path: resolve(__dirname, "dist")
};
export const mode = 'development';
export const module = {
    rules: [
        {
            test: /\.?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        },
    ]
};
export const plugins = [
    new HtmlWebpackPlugin({
        template: join(__dirname, "src", "index.html"),
    }),
];