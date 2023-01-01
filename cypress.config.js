const { defineConfig } = require("cypress");

module.exports = defineConfig({
	component: {
		setupNodeEvents(on, config) {},
		devServer: {
			framework: "create-react-app",
			bundler: "webpack",
		},
	},
});
