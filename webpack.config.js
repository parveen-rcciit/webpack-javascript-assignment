const path=require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/js/index.js',
  watch : true,
  output: {
    path:path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
      rules: [
        {
          test: '/\.js$/',
          loader: 'babel-loader',
          exclude: '/node-modules/'
        },
        {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                options: {
                    includePaths: ['/node-modules/']
                }
            }]
        }
      ]
    },
   plugins:[
      new HtmlWebpackPlugin({
        template:"./src/index.html"
      })
   ],
   devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  }
};