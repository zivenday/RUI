<template>
  <div class="re-address">
    address
    <r-address-group v-model="infos">
      <r-address :info="info">
      </r-address>
      <r-address :info="info1">
      </r-address>
      <r-address :info="info2">
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
        tel: '18011757142',
        addr: 'sfsdfsdfsdfsdfsdfsdfsdfsdfs'
      },
      info: {
        name: '张三',
        tel: '18011757142',
        addr: 'sfsdfsdfsdfsdfsdfsdfsdfsdfs'
      },
      info1: {
        name: '张三1',
        tel: '18011757142',
        addr: 'sfsdfsdfsdfsdfsdfsdfsdfsdfs'
      },
      info2: {
        name: '张三2',
        tel: '18011757142',
        addr: 'sfsdfsdfsdfsdfsdfsdfsdfsdfssfsdfsdfsdfsdfsdfsdfsdfsdfssfsdfsdfsdfsdfsdfsdfsdfsdfssfsdfsdfsdfsdfsdfsdfsdfsdfssfsdfsdfsdfsdfsdfsdfsdfsdfssfsdfsdfsdfsdfsdfsdfsdfsdfssfsdfsdfsdfsdfsdfsdfsdfsdfssfsdfsdfsdfsdfsdfsdfsdfsdfssfsdfsdfsdfsdfsdfsdfsdfsdfssfsdfsdfsdfsdfsdfsdfsdfsdfs'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.re-address{
  background: grey;
  height: 100%;
}
</style>
