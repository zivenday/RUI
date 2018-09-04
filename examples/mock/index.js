/*
 * @Description: undefined
 * @author: zhongw@corp.21cn.com
 * @Date: 2018-07-18 11:04:33
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-08-09 11:48:32
 */
import Mock from 'mockjs'
let getItemById = require('./db/getItemById.do')()
let getPackage = require('./db/getPackage.do')()
let getAddrList = require('./db/getAddrList.do')()
let deleteAddrInfo = require('./db/deleteAddrInfo.do')()
let addAddrInfo = require('./db/addAddrInfo.do')()
let editAddrInfo = require('./db/editAddrInfo.do')()
let getMailOrderInfo = require('./db/getMailOrderInfo.do')()
let carousel = require('./db/carousel')()
let getMailList = require('./db/getMailList.do')()
let getSkuInfo = require('./db/getSkuInfo.do')()
let skuCard = require('./db/skuCard')()
let pageNavbar = require('./db/pageNavbar')()
Mock.setup({
  timeout: '300-1000'
});

Mock.mock('/mock/getItemById.do', getItemById);
Mock.mock('/mock/getPackage.do', getPackage);
Mock.mock('/mock/getAddrList.do', getAddrList);
Mock.mock('/mock/addr/del.do', deleteAddrInfo);
Mock.mock('/mock/addr/add.do', addAddrInfo);
Mock.mock('/mock/addr/edit.do', editAddrInfo);
Mock.mock('/mock/getMailOrderInfo.do', getMailOrderInfo);
Mock.mock('/mock/carousel', carousel);
Mock.mock('/mock/getMailList', getMailList);
Mock.mock('/mock/getSkuInfo', getSkuInfo);
Mock.mock('/mock/skuCard', skuCard);
Mock.mock('/mock/pageNavbar', pageNavbar);