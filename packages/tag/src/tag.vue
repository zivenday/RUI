<template>
  <transition>
    <span class="r-tag" :class="[type?'r-tag--'+type:'']">
      <slot></slot>
    </span>
  </transition>
</template>

<script>
export default {
  name: 'RTag',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String
  }
}
</script>

<style scoped>
</style>
