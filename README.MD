# mockApi
## 定位
- 一个mock接口和代理服务的工程。
- 个人开发时提效工具。
## 核心内容
- 根据配置文件去生成aciton和router的文件内容。
- 启动node服务，去监听请求。
## action
请求的controller层,处理从router过来的请求。从modal中拿数据。可以在这里去做复杂的逻辑操作。
## generate
一键生成文件,action,router。
## modal
接口返回数据源。
## router
node服务中的路由部分，调用action去获取响应。
## views
action和router的文件模板。
## app.js
node服务的入口。
## config.js
配置文件，生成node中的路由和接口的配置。
## default.js
工程中对请求的兜底，以及做代理服务使用。
