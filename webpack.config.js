const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

let scripts_root = path.resolve(__dirname, "src/scripts");
let styles_root = path.resolve(__dirname, "src/styles");

function tsPath(name, format = "tsx") {
    return path.resolve(__dirname, scripts_root, `${name}.${format}`);
}

module.exports = {
    entry: {
        index: tsPath('views/index')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: 'ts-loader',
                include: scripts_root
            }, {
                test: /\.less?$/i,
                use: ['style-loader', 'css-loader', 'less-loader'],
                include: styles_root
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                // use: 'file-loader'
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                    },
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Viewer',
            filename: 'index.html',
            template: 'src/page/index.html'
        }),
    ]
}