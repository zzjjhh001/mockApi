const express = require('express');
const router = express.Router();
const Generate = require('../action/generate');
router.get('/document_center/v1/catalogue', (req, res, next) => new Generate().document_centerv1catalogue(req, res, next));
module.exports = router;