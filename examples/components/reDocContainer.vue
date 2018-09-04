<template>
    <div class="re-doc-container">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 're-doc-container'
}
</script>

<style lang="scss" type="text/scss" scoped>
@import "../assets/scss/variable";
.re-doc-container {
  position: absolute;
  width: 100%;
  min-width: 1680px;
  top:60px;
  left: 0;
  bottom: 0;
  overflow: hidden;
}
</style>
