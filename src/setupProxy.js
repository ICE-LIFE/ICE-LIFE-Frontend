const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
	app.use(
		"/api",
		createProxyMiddleware(['/v1', '/v2'], {
			target: "http://icelife.co.kr",
			changeOrigin: true,
			router: {
				'/v2': process.env.REACT_APP_V2_URL
			},
			pathRewrite: {
				'^/v2': ''
			}
		})
	)
}