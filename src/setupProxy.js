const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/jenkins',
        createProxyMiddleware({
            target: 'http://localhost:8443',
            changeOrigin: true,
            pathRewrite: {
                "^/jenkins": "/s1"
            },
            router: function classify(req) {
                return {
                    protocol: 'http:', // The : is required
                    host: req.headers['x-hostname'],
                    port: req.headers['x-portname']
                };
            },
            secure: false
        })
    );
    app.use(
        '/s2',
        createProxyMiddleware({
            target: 'http://localhost:3060',
            changeOrigin: true,
            secure: false
        })
    );
    app.use(
        '/postData',
        createProxyMiddleware({
            target: 'http://localhost:3010',
            changeOrigin: true,
            pathRewrite: {
                "^/postData": "/s1Post"
            },
            secure: false
        })
    );
};