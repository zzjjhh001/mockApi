const {
  generatedocument_centerv1catalogueData,
} = require('../modal/vtuber');
class Vtuber {
  generatedocument_centerv1catalogue(req, res, next) {
    res.json(generatedocument_centerv1catalogueData);
  }

}
module.exports = Vtuber;