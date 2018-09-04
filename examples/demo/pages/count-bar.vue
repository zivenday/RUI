<template>
  <div>
    <p></p>
    <r-lead>商品计数：</r-lead>
    <p></p>
    <div class="plane">
    <r-count-bar v-model="count"></r-count-bar>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      count: 4
    }
  }
}
</script>
<style lang="scss" scoped>
.plane {
  height: 50px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

