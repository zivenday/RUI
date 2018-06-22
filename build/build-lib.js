/* @启动构建打包指令和运行项目
 * @Author: zhongw@corp.21cn.com 
 * @Date: 2018-06-12 15:24:15 
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-06-22 09:08:40
 */

/**
 * @description Build npm lib
 */
const shell = require('shelljs');
const signale = require('signale');
const tasks = [
  'lint',
  'build:components',
  'build:theme',
  'build:recharger'
];

tasks.forEach(task => {
  signale.pending(task);
  shell.exec(`npm run ${task} --silent`);
  signale.success(task);
});