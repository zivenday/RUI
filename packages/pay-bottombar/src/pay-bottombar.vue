/*
 * @Author: zhongw@corp.21cn.com
 * @Date: 2018-06-27 12:21:10
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-07-07 20:35:19
 */
<template>
  <div class="r-pay-bottombar">
    <span class="r-pay-bottombar__text">
      <span>{{textName}}</span>
      <span>{{currency}}{{sum}}</span>
    </span>
    <a class="r-pay-bottombar__btn" @click="handleClick">{{buttonName}}</a>
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
    }
  },
  data () {
    return {}
  },
  methods: {
    handleClick () {
      this.$emit('click', this.sum)
    }
  }
}
</script>
