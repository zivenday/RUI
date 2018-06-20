# 使用Recharger

本页将开启Recharger的使用之旅

## 安装 Installation

```Javascript
npm i recharger
```

## 引入    Import

在vue项目中在入口文件里引入，如main.js

```Javascript
import Vue from 'vue';
import RUI from 'recharger';
import App from './App.vue';

Vue.use(RUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

## 适配 Adaptive

为了得到更加灵活的适配性,Recharger是根据视口单位vw作为长度单位的,并且使用了以下几个插件来进行支持：

```
postcss-px-to-viewport px转vw工具
postcss-vmin 视口单位兼容ie9
```
recharger使用的postcss-px-to-viewport配置如下：
```Javascript
//注意：按照100vw=375px 转化
  pxtoviewport({
    viewportWidth: 375, 
    viewportHeight: 1334,
    unitPrecision: 5,
    viewportUnit: 'vw',
    selectorBlackList: [],
    minPixelValue: 1,
    mediaQuery: false
  })
```