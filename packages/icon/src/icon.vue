<template>
  <i class="iconfont" :class="'r-icon-'+name"></i>
</template>

<script>
export default {
  name: 'RIcon',

  props: {
    name: String
  }
}
</script>
