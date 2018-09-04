<template>
  <transition name="msgbox-fade">
    <div class="r-dialog" :class="{'is-model':model}" v-show="show">
      <div class="r-dialog__inner">
        <span class="iconfont r-icon-error r-dialog__close" @click="handleClose"></span>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'RDialog',
  data () {
    return {
      showDialog: false
    }
  },
  watch: {

  },
  props: {
    model: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleClose () {
      this.$emit('update:show', false)
      this.$emit('close')
    }
  }
}
</script>
