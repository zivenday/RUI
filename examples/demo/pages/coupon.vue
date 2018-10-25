<template>
  <div>
    <p></p>
    <r-lead>优惠券：</r-lead>
    <p></p>
    <r-coupon :limit="'满5减去10'" :validity="'有效期 2018.09.17-2018.10.09'"></r-coupon>
    <p></p>
    <r-coupon :limit="'满5减去10'" :validity="'有效期 2018.09.17-2018.10.09'" :active="false"></r-coupon>
    <!-- <r-bottom-pop :show.sync="show" :title="'弹框标题'">
    </r-bottom-pop>
    <r-button type="primary" @click="handleClick">显示底部弹框</r-button> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      // show: false
    }
  },
  methods: {
    // handleClick () {
    //   this.show = true
    // }
  }
}
</script>
