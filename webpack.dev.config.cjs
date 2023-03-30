const path = require("path");
module.exports = {
	mode: "development",
	entry: {
		"access-menu": "/static/access-menu.js",
	},
	watch: true,
	output: {
		path: path.resolve(__dirname, "static"),
		filename: "[name].js",
	},
};