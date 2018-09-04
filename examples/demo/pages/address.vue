<template>
  <div class="re-address">
    <p></p>
    <r-lead>地址列表：</r-lead>
    <p></p>
    <r-address-group v-model="infos">
      <r-address :info="info" @edit="handleEdit" @del="handleDel">
      </r-address>
      <r-address :info="info1" @edit="handleEdit" @del="handleDel">
      </r-address>
      <r-address :info="info2" @edit="handleEdit" @del="handleDel">
      </r-address>
    </r-address-group>
  </div>
</template>
<script>
export default {
  data () {
    return {
      infos: {
        name: '张三',
        tel: '18000000099',
        addr: 'addressaddressaddress'
      },
      info: {
        name: '张三',
        tel: '18000000099',
        addr: 'addressaddressaddress'
      },
      info1: {
        name: '李四',
        tel: '18000000000',
        addr: 'addressaddressaddressaddressaddressaddressaddressaddress'
      },
      info2: {
        name: '王五',
        tel: '18000000001',
        addr: 'addressaddressaddressaddressaddressaddressaddressaddressaddressaddressaddressaddressaddressaddressaddressaddress'
      }
    }
  },
  methods: {
    handleEdit () {
      this.$tips('编辑')
    },
    handleDel () {
      this.$tips('删除')
    }
  }
}
</script>
<style lang="scss" scoped>
// .re-address{
//   background: grey;
//   height: 100%;
// }
</style>
