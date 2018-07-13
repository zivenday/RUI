
<template>
  <div style="background:gray;height:100%">
    simple-sku
    <r-simple-sku :show.sync="show" @submit="handleSubmit" v-model="value">
    </r-simple-sku>
    <r-button type="primary" @click="handleClick"></r-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      value: 1
    }
  },
  methods: {
    handleClick (val) {
      this.show = true
      console.log('val', val)
    },
    handleSubmit (val) {
      this.show = false
      console.log('val', val)
      // this.$router.push({ path: '/zh-CN/carousel' })
    }
  }
}
</script>
