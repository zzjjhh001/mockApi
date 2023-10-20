#! /usr/bin/env node
const Handlebars = require('handlebars');
const fs = require('fs');
const chalk = require('chalk');
const path = require('path');
const writeConfigList = [
  {
    name: 'action',
    hb: './views/action.hb',
    writeDir: './action',
  },
  {
    name: 'router',
    hb: './views/router.hb',
    writeDir: './router',
  }
];
const optionsList = require('../config.js');
const handleOptionsList = handle(optionsList);
function handle(optionsList) {
  return optionsList.map(options => {
    options.sysToUp = options.sys.substring(0, 1).toUpperCase() + options.sys.substring(1);
    options.actions.map(action => {
      action.apiName = action.api.split('/').join('');
      return action;
    })
    return options;
  })
}
function generate(optionsList, writeConfig) {
  const tempStr = fs.readFileSync(path.join(__dirname, '../', writeConfig.hb), { encoding: 'utf-8'});
  const templateFunc = Handlebars.compile(tempStr);
  optionsList.forEach(options => {
    fs.writeFileSync(path.join(__dirname, '../', `${writeConfig.writeDir}/${options.sys}.js`), templateFunc(options));
  });
}
function generateRouteIndex(optionsList) {
  console.log(222, chalk.red(111))
  const tempStr = fs.readFileSync(path.join(__dirname, '../', './views/routerIndex.hb'), { encoding: 'utf-8'});
  const templateFunc = Handlebars.compile(tempStr);
  fs.writeFileSync(path.join(__dirname, '../', './router/index.js'), templateFunc(optionsList));
}
function main() {
  // 生成action和router的文件
  const handleOptionsList = handle(optionsList);
  writeConfigList.forEach(writeConfig => {
    generate(handleOptionsList, writeConfig);
  });
  // 生成routerIndex的文件
  generateRouteIndex(handleOptionsList);
}
// 生成action和route代码
main();
const babelParser = require('@babel/parser');
const ExpressionStatement = 'ExpressionStatement'; // 修改变量 对应 module.exports
const VariableDeclaration = 'VariableDeclaration'; // 定义： const a = 2;
function generateData() {
  handleOptionsList.forEach(options => {
    if (!fs.existsSync(path.join(__dirname, '../', `./modal/${options.sys}.js`))) {
      console.log(chalk.red(`请在modal中创建${options.sys}.js文件`));
      return;
    }
    const code = fs.readFileSync(path.join(__dirname, '../', `./modal/${options.sys}.js`), { encoding: 'utf-8'});
    const data = babelParser.parse(code, { sourceType: "module" }).program.body;
    const constDataList = [];
    const exportDataList = [];
    data.forEach(ast => {
      if (ast.type === VariableDeclaration) {
        // 是定义的data数据的语句
        ast.declarations.forEach(t => {
          constDataList.push(t.id.name);
        })
      };
      if (ast.type === ExpressionStatement) {
        // module.exports的语句
        ast.expression.right.properties.forEach(node => {
          exportDataList.push(node.key.name);
        })
      }
    });
    const needDataList = options.actions.map(action => action.apiName + 'Data');
    // 定义时 需要添加
    const logConstList = [];
    // 导出时 需要添加
    const logExportList = [];
    // data中无用的数据
    const logUnLessList = [];
    needDataList.forEach(needData => {
      if (!constDataList.includes(needData)) {
        logConstList.push(needData);
      }
      if (!exportDataList.includes(needData)) {
        logExportList.push(needData);
      }
    });
    constDataList.forEach(constData => {
      if (!needDataList.includes(constData)) {
        logUnLessList.push(constData);
      }
    });
    logConstList.length && logConstList.forEach(logConst => console.log(chalk.red(`需要在文件modal/${options.sys}.js内，添加常量${logConst}`)));
    logExportList.length && logExportList.forEach(logExport => console.log(chalk.red(`需要在文件modal/${options.sys}.js内，导出常量${logExport}`)));
    logUnLessList.length && logUnLessList.forEach(logUnLess => console.log(chalk.yellow(`文件modal/${options.sys}.js中的常量${logUnLess}无用`)));
  });
}
generateData();
