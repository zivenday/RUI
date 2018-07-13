<template>
  <div style="background:gray;height:100%">
    region-choose
    <r-region-choose :show.sync="show" @confirm="handleConfirm">
    </r-region-choose>
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
    },
    handleConfirm (val) {
      console.log(val)
    }
  }
}
</script>
