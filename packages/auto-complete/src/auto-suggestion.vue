<template>
  <transition name="r-zoom-in-top" >
    <div class="r-auto-suggestion" v-show="showPopper" >
      <!-- <li v-if="parent.loading"><i class="el-icon-loading"></i></li>
        <slot v-else>
        </slot> -->
      <slot></slot>
    </div>
  </transition>
</template>
<script>
import Emitter from '../../../src/utils/mixin/emitter'
export default {
  name: 'RAutoSuggestion',
  componentName: 'RAutoSuggestion',
  mixins: [Emitter],
  props: {
    showSuggestion: {
      type: Boolean,
      default: false
    }
  },
  // watch: {
  //   showSuggestion (val, oldVal) {
  //     console.log(val, oldVal)
  //   }
  // },

  data () {
    return {
      showPopper: false
    }
  },
  created () {
    this.$on('visible', (val) => {
      // console.log('>?>?>?', val)
      this.showPopper = val
    })
  },
  methods: {
    select (item) {
      this.dispatch('RAutocomplete', 'item-click', item)
    }
  }
}
</script>
<style lang="scss" type="text/scss" scoped>

</style>
