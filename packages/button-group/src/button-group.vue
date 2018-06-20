<template>
  <div class="r-button-group"
       :class="type ? 'r-button-group--' + type : ''">
   <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "RButtonGroup",
    props: {
      type: {
        type: String,
        default: 'default'
      }
    },
    computed: {
      // _elFormItemSize() {
      //   return (this.elFormItem || {}).elFormItemSize;
      // },
      // buttonSize() {
      //   return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      // }
    },
    methods: {
      // handleClick(evt) {
      //   this.$emit('click', evt);
      // },
      // handleInnerClick(evt) {
      //   if (this.disabled) {
      //     evt.stopPropagation();
      //   }
      // }
    }
  }
</script>

