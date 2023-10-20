const express = require('express');
const router = express.Router();
const Vtuber = require('../action/vtuber');
router.get('/generate/document_center/v1/catalogue', (req, res, next) => new Vtuber().generatedocument_centerv1catalogue(req, res, next));
module.exports = router;