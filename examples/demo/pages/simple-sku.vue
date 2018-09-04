
<template>
  <div>
    <p></p>
    <r-lead>商品套餐选择</r-lead>
    <p></p>
    <r-button type="primary" @click="handleClick">点击弹出商品套餐选择</r-button>
    <r-simple-sku :show.sync="show" :srcKey="'picAddr'" :packageList="packageList" @submit="handleSubmit" >
    </r-simple-sku>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      value: 1,
      packageList: [
        { price: '300', picAddr: 'https://img.alicdn.com/tfs/TB1.CUdsY9YBuNjy0FgXXcxcXXa-1572-394.png', alt: '商品', name: '套餐1assddddsssssssssss', count: 1 }
      ]
    }
  },
  mounted () {
    this.getSkuInfo({}).then(res => {
      if (!res.data.code) {
        this.packageList = res.data.skuInfoList
      }
    })
  },
  methods: {
    async getSkuInfo () {
      const res = this.$axios.post('/mock/getSkuInfo')
      return res
    },
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
