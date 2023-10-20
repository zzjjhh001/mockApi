// config : sys: 系统名; aciton: 接口路径; reqType: 请求类型
const configList = [
  {
    sys: 'auth',
    actions: [
      {
        api: '/v1/userInfo',
        reqType: 'get',
      },
      {
        api: '/v1/menuInfo',
        reqType: 'post',
      },
    ],
  },
  {
    sys: 'generate',
    actions: [
      {
        api: '/document_center/v1/catalogue',
        reqType: 'get'
      }
    ]
  },
  {
    sys: 'vtuber',
    actions: [
      {
        api: '/generate/document_center/v1/catalogue',
        reqType: 'get'
      }
    ]
  },
];
module.exports = configList;