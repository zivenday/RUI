/*
 * @Description: undefined
 * @author: zhongw@corp.21cn.com
 * @Date: 2018-07-06 10:36:27
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-07-13 10:41:46
 */
<template>
  <div class="r-sku-card">
    <div class="r-sku-card__img">
      <img :src="src" alt="">
    </div>
    <div class="r-sku-card__info">
      <div>{{title}}</div>
      <div>{{name}}</div>
      <div>
        <span>￥</span><span>{{price}}</span>
        <span>x{{count}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RSkuCard',
  componentName: 'RSkuCard',
  props: {
    title: {
      type: String,
      default: '卡标题'
    },
    src: {
      type: String,
      default: 'https://img.yzcdn.cn/public_files/2017/09/05/bac1903e863834ace25773f3554b6890.jpg'
    },
    name: {
      type: String,
      default: '套餐名'
    },
    count: {
      type: [Number, String],
      default: 1,
      validator: function (value) {
        return value > 0
      }
    },
    price: {
      type: Number,
      default: 100,
      validator: function (value) {
        return value > 0
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>
