<template>
  <i class="iconfont" :class="'r-icon-'+name" style="display: inline-block">
    <slot/>
  </i>
</template>

<script>
export default {
  name: 'RIcon',

  props: {
    name: String
  }
}
</script>
