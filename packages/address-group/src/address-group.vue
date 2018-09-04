/*
 * @Author: zhongw@corp.21cn.com
 * @Date: 2018-06-30 16:50:51
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-08-15 12:13:39
 */
<template>
  <div class="r-address-group">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'RAddressGroup',
  componentName: 'RAddressGroup',
  props: {
    value: Object
  },
  created () {
    this.$on('handleChange', value => {
      this.$emit('change', value)
    })
  },
  data () {
    return {
    }
  }
}
</script>
