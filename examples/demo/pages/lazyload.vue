<template>
  <div>
    <div class="demo">111111</div>
    <img v-lazy="'https://img.yzcdn.cn/public_files/2017/09/05/bac1903e863834ace25773f3554b6890.jpg'"
    :fail="'https://img.yzcdn.cn/public_files/2017/09/05/138c32d4384b5e4a78dc4e1ba58e6a80.jpg'" :class="['r-picture',{'r-picture--block':hasDefaultBlock}]">
  </div>
</template>
<script>
export default {
  props: {
    fail: {
      type: String,
      default: ''
    },
    waiting: {
      type: String,
      default: ''
    },
    hasDefaultBlock: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      a: '123'
    }
  }
}
</script>
<style lang="scss" scoped>
.demo{
  height: 800px;
}
img{
  width: 100%;
  height: 300px;
}
</style>
