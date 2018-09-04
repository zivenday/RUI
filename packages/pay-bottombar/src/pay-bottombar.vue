/*
 * @Author: zhongw@corp.21cn.com
 * @Date: 2018-06-27 12:21:10
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-08-24 15:34:35
 */
<template>
  <div class="r-pay-bottombar">
    <span class="r-pay-bottombar__text" :class="hasShopCart?'is-shoppingcart':''">
      <span>{{textName}}</span>
      <span>{{currency}}{{sum}}</span>
    </span>
    <a class="r-pay-bottombar__cart" @click="handleShopcart" v-if="hasShopCart">购物车</a>
    <a class="r-pay-bottombar__btn" :class="hasShopCart?'is-shoppingcart':''" @click="handleClick">{{buttonName}}</a>
  </div>
</template>
<script>
export default {
  name: 'RPayBottombar',
  componentName: 'RPayBottombar',
  props: {
    buttonName: {
      type: String,
      default: '去支付'
    },
    textName: {
      type: String,
      default: '实付款：'
    },
    currency: {
      type: String,
      default: '￥'
    },
    sum: {
      type: Number,
      default: 0
    },
    hasShopCart: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  methods: {
    handleClick () {
      this.$emit('click', this.sum)
    },
    handleShopcart () {
      this.$emit('clickShopcart')
    }
  }
}
</script>
