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
  'lint',//
  'build:components',//babel编译成与node书写相同的模式
  'build:theme',// 编译默认样式
  'build:recharger'//编译Recharger.js ,recharger.min.js
];

tasks.forEach(task => {
  signale.pending(task);
  shell.exec(`npm run ${task} --silent`);
  signale.success(task);
});