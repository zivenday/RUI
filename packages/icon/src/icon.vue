<template>
  <i class="iconfont" :class="'r-icon-'+name" style="display: inline-block" :style="pxToview(styles)">
    <slot />
  </i>
</template>

<script>
import styleFun from '../../utils/mixin/style'
export default {
  name: 'RIcon',
  mixins: [styleFun],
  props: {
    name: String,
    styles: Object
  }
}
</script>
