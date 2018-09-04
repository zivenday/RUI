/*
 * @Description: undefined
 * @author: zhongw@corp.21cn.com
 * @Date: 2018-07-06 11:03:54
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-08-28 09:42:09
 */
<template>
  <div>
    <p></p>
    <r-lead>商品卡：</r-lead>
    <p></p>
    <r-sku-card :title="skuCard1.title" :name="skuCard1.name" :src="skuCard1.src">
    </r-sku-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      skuCard1: {

      }
    }
  },
  mounted () {
    this.skuCard({}).then(res => {
      console.log('????', res)
      if (!res.data.code) {
        this.skuCard1 = res.data.skuCard
      }
    })
  },
  methods: {
    async skuCard () {
      const res = this.$axios.post('/mock/skuCard')
      return res
    }
  }
}
</script>
