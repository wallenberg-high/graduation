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
//	resolve: {
//		extensions: ["*", ".js", ".jsx"]
//	},
//	output: {
//		path: __dirname + "/dist",
//		filename: "bundle.js"
//	},
//	devServer: {
//		contentBase: "./dist"
//	},
	plugins: [
//		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{ from: "./src/img/", to: "img" }
			]
		}),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html"
		})
	]
};
