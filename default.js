const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();
// 做代理服务器用
function defaultHandle(req, res, next) {
  // 请求第三方
  console.log(2222, req.url);
  const target = 'http://yapi.myhexin.com/';
  proxy.web(req, res, {
    target,
    changeOrigin: true,
  })
};
module.exports = defaultHandle;