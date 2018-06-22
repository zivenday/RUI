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

为了得到更加灵活的适配性,Recharger是根据视口单位vw作为长度单位的。vw相比px,rem的确有更加好的适配性，尤其是在移动端的使用上，然而它也有局限性，有一定的兼容性问题。不过，Recharger已经在应用之前已经做了兼容性问题的解决。Recharger为了解决这个问题用到了一些核心插件以及profill：

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