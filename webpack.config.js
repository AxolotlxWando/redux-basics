var path = require("path");
var webpack = require("webpack");

var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "redux-basics": [path.join(__dirname, "app", "redux-basics.js")],
    vendors: ["react", "react-dom", "flux"]
  },
  module: {
    loaders: [
      { test:/\.js$/, include: path.join(__dirname, "app"), loader: "babel-loader"}
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name]-bundle.js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendors", "vendor.[chunkhash].bundle.js"),
    new HtmlWebpackPlugin({
      filename: 'redux-basics.html',
      template: path.join(__dirname, "app", "index.html"),
      inject: 'body',
      
      name: 'Redux Basics',
    })
  ],
  resolve: {
    root: path.resolve(__dirname, "client"),
    modulesDirectories: ["node_modules"]
  },
  devtool: "#inline-source-map"
}

