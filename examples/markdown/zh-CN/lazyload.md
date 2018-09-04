# Lazyload 懒加载
本页介绍图片缓加载的使用


## 单独引入

```JavaScript

import Vue from 'vue';
import { Lazyload } from 'vant';

// options 为可选参数，无则不传
Vue.use(Lazyload, options);

```
## 代码演示
```Html
 <img v-for="(img,index) in imageList" v-lazy="img" :key="index">

```
具体使用访问：[vue-lazyLoad](https://github.com/hilongjw/vue-lazyload)
