<template>
  <div>
    <p></p>
    <r-lead>计数图标：</r-lead>
    <p></p>
    <r-count-icon :styles="styles" :count="100"></r-count-icon>
    <p></p>
    <r-count-icon :styles="styles" :count="13"></r-count-icon>
    <p></p>
    <r-count-icon :styles="styles" :count="1"></r-count-icon>
  </div>
</template>
<script>
export default {
  data () {
    return {
      styles: {
        fontSize: '23px'
      }
    }
  }
}
</script>
