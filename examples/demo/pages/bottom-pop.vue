<template>
  <div style="background:gray;height:100%">
    bottom-pop
    <r-bottom-pop :show.sync="show">
    </r-bottom-pop>
    <r-button type="primary" @click="handleClick"></r-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleClick () {
      this.show = true
    }
  }
}
</script>
