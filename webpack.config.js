const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path'); //路径管理模块,使用它可以高效获取项目路径,避免路径错误.

/**
 * 在这个对象中配置webpack的运行参数
 */
var config = {
    //指定环境
    mode: "development", //当前在开发产品
    //指定集成引入资源的入口js文件
    entry: path.join(__dirname, "./src/index.js"),
    //webpack处理后输出的文件的配置
    output: {
        path: path.join(__dirname, "./dist"), //指定输出的目录
        filename: 'bundle.js', //输出的文件的文件名
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: "index.html"
        })
    ],
    devServer: {
        port: 8080,
        static: path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {},
                }, ],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            }
        ],
    },
}

/**
 * 向外暴露配置webpack的对象
 */
module.exports = config;