# 一个mock接口的工程
分为两大核心
- 根据配置文件去生成aciton和router的文件内容。
- 启动node服务，去监听请求。
## action
请求的controller层,处理从router过来的请求。从modal中拿数据。
## generate
一键生成文件,action,router。
## modal
接口返回数据源。
## router
路由部分。
## views
action和router的文件模板。
## app.js
node服务的入口。
## config.js
配置文件。
## default.js
工程中对请求的兜底。