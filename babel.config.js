module.exports = {
	presets: ["module:metro-react-native-babel-preset"],
	env: {
		production: {},
	},
	plugins: [
		[
			"@babel/plugin-proposal-decorators",
			{
				legacy: true,
			},
		],
		[
			'module-resolver',
			{
				"root": ["./app"],
				"extensions": [".ts", ".tsx"]
			}
		],
		["@babel/plugin-proposal-optional-catch-binding"],
	],
}
