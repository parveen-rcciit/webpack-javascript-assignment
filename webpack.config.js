var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  mode: "development",
  watch: true,
  resolve: {
    extensions: ['.js', '.scss']
  },
  entry: "./src/js/index.js", // it can be multiple file. For multiple file use array with proper path
  output: { // this is for output where you want to put your file after complete build process
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {// here we will load some external resource. which we are using to build our project
    rules: [
      {
        test: /\.js$/, // it will find all js 
        use: "babel-loader", // which will perform some functioanlity during build process.
        exclude: path.resolve(__dirname, "node_modules") // expect this 
      }, {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }/*,
     {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
      }, {
          loader: 'expose-loader',
          options: '$'
    }]
  }*/
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './src/assets',
      to: 'assets'
    }]),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunksSortMode: 'dependency'
    })/*,
    new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })*/
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000',
        secure: false
      }
    }
  }
}