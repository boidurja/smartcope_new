module.exports = function (api) {

	api.cache(true);

	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					alias: {
						"@providers": "./providers",
						"@screens": "./screens",
						"@containers": "./containers",
						"@components": "./components",
						"@theme": "./theme",
						"@store": "./store",
						"@hooks": "./hooks",
						"@api": "./api",
						"@utils": "./utils",
					}
				}
			],
			[
				'inline-dotenv'
			]
		]
	};
	
};
