const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
	app.use(
		"/api",
		createProxyMiddleware(['/v1', '/v2'], {
			target: "https://home.astro36.me",
			changeOrigin: true,
			router: {
				'/v2': process.env.REACT_APP_V2_URL
			},
			pathRewrite: {
				'^/v2': ''
			}
		})
	)
	app.use(
		"/board",
		createProxyMiddleware({
			target: "https://home.astro36.me",
			changeOrigin: true,
		})
	)
}