<template>
  <div>
    <p></p>
    <r-lead>区域选择：</r-lead>
    <p></p>
    <r-input type="primary" v-model="value"></r-input>
    <p></p>
    <r-button type="primary" @click="handleClick">弹出区域选择</r-button>
    <r-region-choose :show.sync="show" @confirm="handleConfirm">
    </r-region-choose>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '',
      show: false
    }
  },
  methods: {
    handleClick () {
      this.show = true
    },
    handleConfirm (val) {
      this.value = val
    }
  }
}
</script>
