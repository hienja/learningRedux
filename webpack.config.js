const path = require('path');

module.exports = {
	context: __dirname,
	entry: ['./js/ClientApp.jsx'],
	devtool: 'cheap-eval-source-map',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	devServer: {
		publicPath: '/public/'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: true
	},
	module: {
		rules: [
			// {
			// 	enforce: 'pre',
			// 	test: /\.jsx?$/,
			// 	exclude: /node_modules/,
			// 	loader: 'eslint-loader'
			// },
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				query: {
					presets: ['react']
				}
			}
		]
	}
};
