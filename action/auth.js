const {
  v1userInfoData,
  v1menuInfoData,
} = require('../modal/auth');
class Auth {
  v1userInfo(req, res, next) {
    res.json(v1userInfoData);
  }

  v1menuInfo(req, res, next) {
    res.json(v1menuInfoData);
  }

}
module.exports = Auth;