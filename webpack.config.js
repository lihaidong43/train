const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
module.exports = {
  devtool: "source-map",  
  mode: 'development',  
  entry : {
    index : './index.js',
    communication : './communication.js',
    todolist : './todolist.js'
  } ,
  output : {
        path: __dirname + '/dist', 
        publicPath: '/dist',
        chunkFilename: '[name].bundle.js',
  },
  module: {    
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }         
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: `${require.resolve('url-loader')}?limit=100&&name=images/[name].[hash:6].[ext]`
      },
    ]
  },
  plugins: [
     new HtmlWebPackPlugin({
      chunks : ['index'],
      template: "./index.html",
      filename: "./index.html"
    }),
    new HtmlWebPackPlugin({
      chunks : ['communication'],
      template: "./communication.html",
      filename: "./communication.html"
    }),
    new HtmlWebPackPlugin({
      chunks : ['todolist'],
      template: "./todolist.html",
      filename: "./todolist.html"
    }),
    new CleanWebpackPlugin(['dist'])
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist")
  }
}