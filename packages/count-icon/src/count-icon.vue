/*
 * @Description: countIcon
 * @author: zhongw@corp.21cn.com
 * @Date: 2018-10-10 12:13:30
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-10-15 12:27:02
 */
<template>
  <div class="r-count-icon" @click="handleClick">
    <r-icon :name="name" :styles="styles" :count="count">
      <div class="r-count-icon__badge" v-if="count>0" :class="type==='default'?'is-default':'is-hollow'" :style="badgeStyles">
        {{count>99?'99+':count}}
      </div>
    </r-icon>
  </div>
</template>
<script>
export default {
  name: 'RCountIcon',
  componentName: 'RCountIcon',
  props: {
    name: {
      type: String,
      default: 'shopping-cart'
    },
    styles: {
      type: Object
    },
    badgeStyles: Object,
    type: {
      type: String,
      default: 'default',
      validator: function (value) {
        if (value === 'default' || value === 'hollow') {
          return true
        } else {
          return false
        }
      }
    },
    count: {
      type: Number,
      default: 0,
      validator: function (value) {
        return value >= 0
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleClick () {
      this.$emit('click', this.count)
    }
  }
}
</script>
