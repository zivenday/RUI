<template>
  <div class="container">
    <p></p>
    <r-lead>图片懒加载：</r-lead>
    <p></p>
    <img v-for="(img,index) in imageList" v-lazy="img" :key="index">
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
      imageList: [
        'https://s1.ax1x.com/2018/08/23/PTXA8x.jpg',
        'https://s1.ax1x.com/2018/08/23/PTXPa9.jpg',
        'https://s1.ax1x.com/2018/08/23/PTXi5R.jpg',
        'https://s1.ax1x.com/2018/08/23/PTXE26.jpg',
        'https://s1.ax1x.com/2018/08/23/PTXCVJ.jpg',
        'https://s1.ax1x.com/2018/08/23/PTXkP1.jpg'
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  padding-bottom: 30px;
}
img {
  width: 100%;
  height: auto
}
</style>
