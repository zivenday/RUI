<template>
  <div class="r-carousel-item" :style="[{width:pxToview(width),height:pxToview(height)}]">
    <slot/>
  </div>
</template>
<script>
import StyleFun from '../../utils/mixin/style.js'
import Emitter from '../../utils/mixin/emitter'
export default {
  name: 'RCarouselItem',
  componentName: 'RCarouselItem',
  mixins: [StyleFun, Emitter],
  inject: ['rCarousel'],
  computed: {
    carousel () {
      let parent = this.$parent
      let parentName = parent.$options.componentName
      while (parentName !== 'RCarousel') {
        if (parentName === 'RCarouselItem') {
        }
        parent = parent.$parent
        parentName = parent.$options.componentName
      }
      return parent
    }
  },
  data () {
    return {
      width: '',
      height: ''
    }
  },
  created () {
    this.dispatch('RCarousel', 'r.carousel.addField', [this])
  },
  mounted () {
    const rect = this.carousel.$el.getBoundingClientRect()
    this.width = rect.width
    this.height = this.carousel.isNullHight ? this.width * 320 / 375 : this.carousel.height
  }
}
</script>
