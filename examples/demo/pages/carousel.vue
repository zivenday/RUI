<template>
  <div style="overflow:hidden" @click="handleClick">
    <r-carousel :height="300" >
      <r-carousel-item>
        <img src='https://img.yzcdn.cn/public_files/2017/09/05/bac1903e863834ace25773f3554b6890.jpg'>
      </r-carousel-item>
      <r-carousel-item>
        <img src="https://img.yzcdn.cn/public_files/2017/09/05/138c32d4384b5e4a78dc4e1ba58e6a80.jpg">
      </r-carousel-item>
      <r-carousel-item>
        <img src='https://img.yzcdn.cn/public_files/2017/09/05/bac1903e863834ace25773f3554b6890.jpg'>
      </r-carousel-item>
    </r-carousel>
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
      this.$router.push({ path: '/zh-CN/simple-sku' })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
