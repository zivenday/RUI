<template>
  <div>
    <p></p>
    <r-lead>套餐选择：</r-lead>
    <p></p>
    <r-cash-bulk-group v-model="bulkInfo" @change="change">
      <r-cash-bulk :bulkInfo="bulkInfo1"></r-cash-bulk>
      <r-cash-bulk :bulkInfo="bulkInfo2"></r-cash-bulk>
      <r-cash-bulk :bulkInfo="bulkInfo3"></r-cash-bulk>
    </r-cash-bulk-group>
  </div>
</template>
<script>
export default {
  data () {
    return {
      bulkInfo: { duration: '1年', spend: '￥60' },
      bulkInfo1: { duration: '1年', spend: '￥60' },
      bulkInfo2: { duration: '2年', spend: '￥100' },
      bulkInfo3: { duration: '3年', spend: '￥120' }
    }
  },
  methods: {
    change (val) {
      console.log(val.duration + '-----' + val.spend)
      console.log(this.bulkInfo.duration + '-----' + this.bulkInfo.spend)
      // this.$alert(val.duration + '+' + val.spend)
    }
  }
}
</script>
