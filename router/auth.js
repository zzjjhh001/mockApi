const express = require('express');
const router = express.Router();
const Auth = require('../action/auth');
router.get('/v1/userInfo', (req, res, next) => new Auth().v1userInfo(req, res, next));
router.post('/v1/menuInfo', (req, res, next) => new Auth().v1menuInfo(req, res, next));
module.exports = router;