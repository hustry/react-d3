
var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: "inline-sourcemap",
	entry: "./app/index.js",
	output:{
		path:'./build',
		filename : "client.min.js",
		publicPath:"/assets/"
	},
	module:{
		loaders:[
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loader:'babel-loader',
				query:{
					presets:['es2015','react']					
				}
			},
			{
				test:/\.css$/,
				loader:'style!css'
			},
			{
				test:/\.(png|jpg)$/,
				loader:'url-loader?limit=8192'
			}
		]
	},
	resolve:{
		extensions:['','.js','.json']
	},
	plugins:[
		new webpack.NoErrorsPlugin()
	]
};