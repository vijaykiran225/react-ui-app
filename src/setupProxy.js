const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/jenkins',
        createProxyMiddleware({
            target: 'http://localhost:3010',
            changeOrigin: true,
            pathRewrite: {
                "^/jenkins": "/s1"
            }
        })
    );
    app.use(
        '/s2',
        createProxyMiddleware({
            target: 'http://localhost:3060',
            changeOrigin: true,
        })
    );
    app.use(
        '/postData',
        createProxyMiddleware({
            target: 'http://localhost:3010',
            changeOrigin: true,
            pathRewrite: {
                "^/postData": "/s1Post"
            }
        })
    );
};