<template>
  <div class="r-tab-pane" v-show="active" role="tabpanel" :aria-hidden="!active" :id="`pane-${paneName}`" :aria-labelledby="`tab-${paneName}`">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'RTabPane',

  componentName: 'RTabPane',

  props: {
    label: String,
    labelContent: Function,
    name: String,
    closable: Boolean,
    disabled: Boolean
  },

  data () {
    return {
      index: null
    }
  },

  computed: {
    isClosable () {
      return this.closable || this.$parent.closable
    },
    active () {
      return this.$parent.currentName === (this.name || this.index)
    },
    paneName () {
      return this.name || this.index
    }
  },

  mounted () {
    this.$parent.addPanes(this)
  },

  destroyed () {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
    this.$parent.removePanes(this)
  },

  watch: {
    label () {
      this.$parent.$forceUpdate()
    }
  }
}
</script>
