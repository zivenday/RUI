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
为了得到更加灵活的适配性,Recharger采用视口单位vw作为长度单位。使用vw是把双刃剑。vw相比px,rem的确有更加好的灵活性，也更加方便，尤其是在移动端的使用上，然而它也有局限性，有一定的兼容性问题。
我们可以在[这里](https://caniuse.com/#search=vw)查看vw的兼容范围。主要是针对老版本手机系统和一些特定浏览器无法兼容的问题。为此，你可能会有些担心。不过来源于大漠的[解决方案](https://www.w3cplus.com/css/vw-for-layout.html)有效的解决绝大多数的这个问题。
Recharger同样也采用这种方案，实践证明Recharger已经能够兼容目前主流的手机系统或者手机浏览器。
Recharger使用的核心插件有以下两个：

```
postcss-px-to-viewport px转vw工具
Viewport Units Buggyfill  vw的降级兼容
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