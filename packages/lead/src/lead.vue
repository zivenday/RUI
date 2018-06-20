<template>
    <div class="r-lead" :style="styles">
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </div>
</template>
<script>
export default {
  name: 'RLead',
  props: {
    styles: {
      type: Object,
      default: function () {
        return {}
      }
    }
  }
}
</script>
<style scoped>
</style>
