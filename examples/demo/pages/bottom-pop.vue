<template>
  <div>
    <p></p>
    <r-lead>底部弹框：</r-lead>
    <p></p>
    <r-bottom-pop :show.sync="show" :title="'弹框标题'">
    </r-bottom-pop>
    <r-button type="primary" @click="handleClick">显示底部弹框</r-button>
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
