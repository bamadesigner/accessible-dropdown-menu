const path = require("path");
module.exports = {
	mode: "production",
	entry: {
		"access-menu": "/static/access-menu.js",
	},
	output: {
		path: path.resolve(__dirname, "static"),
		filename: "[name].min.js",
	},
};