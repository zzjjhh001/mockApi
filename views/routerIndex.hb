const express = require('express');
const router = express.Router();
{{#each @root}}
const {{sys}}Route = require('./{{sys}}');
router.use('/{{sys}}', {{sys}}Route);

{{/each}}
module.exports = router;