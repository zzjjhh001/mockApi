const express = require('express');
const router = express.Router();
const {{sysToUp}} = require('../action/{{sys}}');
{{#each actions}}
router.{{reqType}}('{{api}}', (req, res, next) => new {{@root.sysToUp}}().{{apiName}}(req, res, next));
{{/each}}
module.exports = router;