const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
	entry: "./src/js/index.js",
//	devtool: "eval-source-map",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true
						}
					}
				]
			},
			{
				test: /\.ya?ml$/,
				type: "json", // Required by Webpack v4
				use: "yaml-loader"
			}
		]
	},
	output: {
		path: __dirname + "/dist"
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html"
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: "./assets/img/", to: "img" },
				{ from: "./assets/favicon/*", to: "[name][ext]" },
				{ from: "dist", to: "../docs", globOptions: {
					ignore: [
						"**/*.html",
						"**/*.js",
						"**/*.txt"
					]
				} }
			]
		})
	]
};
