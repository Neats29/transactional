var HtmlWebpackPlugin = require('html-webpack-plugin');
//var css = require("./app/components/getUser.css");

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/,
				query: { presets: ['es2015', 'react'] }
			}
			//{ test: /\.css$/, loader: "!css-loader" }
    ],
  },
  plugins: [HTMLWebpackPluginConfig],
  devServer: {
		host: "localhost",
		port: 4000
	}
};
