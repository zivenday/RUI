<template>
  <img ref='picture' :alt="alt" :src='currentSrc'
  :class="['r-picture',{'r-picture--block':hasDefaultBlock}]">
</template>
<script>
export default {
  data () {
    return {
      currentSrc: '',
      afterLazyInterval: undefined
    }
  },
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: [String, Number],
      default: ''
    },
    afterLazy: {
      type: Boolean,
      default: false
    },
    afterLazyFunc: Function,
    hasDefaultBlock: {
      type: Boolean,
      default: false
    },
    loadingSrc: {
      type: String,
      default: ''
    },
    errorSrc: {
      type: String,
      default: ''
    }
  },
  created () {
    this.afterLazyInterval = this.afterLazy ? setInterval(this.afterLazyAction, 100) : undefined
  },
  mounted () {

  },
  methods: {
    afterLazyAction (cb) {
      const _scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const _viewportSize = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      if (_scrollTop + _viewportSize - this.$el.offsetTop > 0) {
        this.currentSrc = this.src
        clearInterval(this.afterLazyInterval)
        cb ? cb() : ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
