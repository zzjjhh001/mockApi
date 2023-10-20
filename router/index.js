const express = require('express');
const router = express.Router();
const authRoute = require('./auth');
router.use('/auth', authRoute);

const generateRoute = require('./generate');
router.use('/generate', generateRoute);

const vtuberRoute = require('./vtuber');
router.use('/vtuber', vtuberRoute);

module.exports = router;