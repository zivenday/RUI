<template>
  <div>
    <p></p>
    <r-lead>支付底栏：</r-lead>
    <p></p>
    <r-pay-bottombar :sum="188.9*100" @click="handleClick"></r-pay-bottombar>
    <p></p>
    <r-lead>购物车支付底栏：</r-lead>
    <p></p>
    <r-pay-bottombar :sum="188.9*100" :hasShopCart="true" @click="handleClick" @clickShopcart="handleShop"></r-pay-bottombar>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handleClick () {
      this.$tips('支付')
    },
    handleShop () {
      this.$tips('购物车')
    }
  }
}
</script>
