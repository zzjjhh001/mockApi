const {
  document_centerv1catalogueData,
} = require('../modal/generate');
class Generate {
  document_centerv1catalogue(req, res, next) {
    res.json(document_centerv1catalogueData);
  }

}
module.exports = Generate;