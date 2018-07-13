<template>
  <div class="r-carousel-item" :style="[{width:width,height:height}]">
    <slot/>
  </div>
</template>
<script>
import StyleFun from '../../utils/mixin/style.js'
export default {
  name: 'RCarouselItem',
  componentName: 'RCarouselItem',
  mixins: [StyleFun],
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
  mounted () {
    const rect = this.carousel.$el
    this.height = rect.offsetHeight + 'px'
    this.width = rect.offsetWidth + 'px'
    // console.log(this.carousel, this.height, this.width)
  }
}
</script>
