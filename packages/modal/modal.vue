/*
 * @Description: 临时modal
 * @author: zhongw@corp.21cn.com
 * @Date: 2018-07-10 17:35:33
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-07-13 15:03:25
 @touchmove.prevent.stop
 */
<template>
  <transition name="r-fade">
    <div v-show="visible" @touchmove.prevent.stop class="r-modal" />
  </transition>
</template>

<script>
export default {
  name: 'RModal',
  props: {
    visible: Boolean,
    zIndex: Number,
    className: String,
    customStyle: Object
  },

  computed: {
    style () {
      return {
        zIndex: this.zIndex,
        ...this.customStyle
      }
    }
  }
}
</script>
