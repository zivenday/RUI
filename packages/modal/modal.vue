/*
 * @Description: 临时modal
 * @author: zhongw@corp.21cn.com
 * @Date: 2018-07-10 17:35:33
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-10-16 17:01:27
 @touchmove.prevent.stop
 */
<template>
  <transition name="r-fade">
    <div v-show="visible" @touchmove.prevent.stop class="r-modal" @click="click"/>
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
