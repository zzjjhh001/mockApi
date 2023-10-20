const {
  {{#each actions}}
  {{this.apiName}}Data,
  {{/each}}
} = require('../modal/{{sys}}');
class {{sysToUp}} {
  {{#each actions}}
  {{this.apiName}}(req, res, next) {
    res.json({{this.apiName}}Data);
  }

  {{/each}}
}
module.exports = {{sysToUp}};