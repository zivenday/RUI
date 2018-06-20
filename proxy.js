/*
  http-proxy 
*/
var http = require('http')
  ,httpProxy = require('http-proxy')  //http-proxy
  ,proxy = httpProxy.createProxyServer({xfwd:true})
  ,fs = require('fs')
  ,path = require('path');
var express = require('express');
var app = express();


var getConType = function(ext){
  var contentType = '';
  switch(ext){
    case ".html":
      contentType= "text/html";
      break;
    case ".js":
      contentType="text/javascript";
      break;
    case ".css":
      contentType="text/css";
      break;
    case ".gif":
      contentType="image/gif";
      break;
    case ".jpg":
      contentType="image/jpeg";
      break;
    case ".png":
      contentType="image/png";
      break;
    case ".ico":
      contentType="image/icon";
      break;
    default:
      contentType="application/octet-stream";
  }

  return contentType;
};
var cookie  = "";
app.use(function(req, res) {
  var _url = req.url //获取请求的url
    ,_file
    ,_localPath
    ,_localFile
    ,_ext
    ,_stream 
  ;
  if(_url.indexOf('.do')===-1){
    _file = _url.replace(/\?.*/ig,'');
    _ext = path.extname(_file); // 文件扩展
    //转换成本地路径
    _localPath = __dirname+'/dist/';;
    _localFile = _localPath+_file;
    console.log("_localFile",_localFile)
    //判断文件是否存在
    if(fs.existsSync(_localFile)){//如果文件存在
        res.sendfile(_localFile);
    }else{//返回404错误
      res.send("<h1>404 Not Found</h1>");
    }
  }else{
    proxy.web(req, res, { target: 'http://iot.21cn.com' });
  }
});
proxy.on('proxyReq', function (proxyReq, req, res) {
    req.headers.cookie = cookie + req.headers.cookie
    proxyReq._headers = req.headers;
    return req;
});

proxy.on('error', function (proxyReq, req, res) {
    res.send("<h1>404 Not Found</h1>");
});

proxy.on('proxyRes', function (proxyRes, req, res) {
    var JSESSIONID =  proxyRes.headers['set-cookie'];
    if(JSESSIONID){
      cookie = JSESSIONID;
      res.setHeader('Set-Cookie',proxyRes.headers['set-cookie']);  
    }
});
console.log("服务已经启动！")
app.listen(8001);