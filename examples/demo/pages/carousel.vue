<template>
  <div class="demo">
    <p></p>
    <r-lead>轮播：</r-lead>
    <p></p>
    <r-carousel @change="handleChange">
      <r-carousel-item v-for="(item,index) in itemList" :key="index">
        <img :src="item.src">
      </r-carousel-item>
    </r-carousel>
    <p></p>
    <r-lead>静态型轮播：</r-lead>
    <p></p>
    <r-carousel :autoPlay="false">
      <r-carousel-item v-for="(item,index) in itemList" :key="index">
        <img :src="item.src">
      </r-carousel-item>
    </r-carousel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      itemList: []
    }
  },
  mounted () {
    this.$axios.post('/mock/carousel').then(res => {
      if (res.data.code === 0) {
        this.itemList = res.data.itemList
      }
    })
  },
  methods: {
    handleClick () {
      this.$router.push({ path: '/zh-CN/simple-sku' })
    },
    handleChange (param) {
      // console.log('param', param)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
