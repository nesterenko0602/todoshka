var path = require('path');

module.exports = {
	configureWebpack : {
		resolve: {
      modules : [
        path.resolve("./src"),
        path.resolve("./static"),
        path.resolve("./node_modules")
      ],
      alias: {
        '~variables': path.resolve(
          "./src/styles/variables.scss",
        ),
      }
    },
	}
}