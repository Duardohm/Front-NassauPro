const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/clients",
        createProxyMiddleware({
            target: "http://18.230.23.174:8080",
            changeOrigin: true,
            secure: false,
        })
    );
};
