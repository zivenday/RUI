<template>
  <div class="r-cash-bulk" role="cash-bulk" :class="{'is-active':JSON.stringify(value) === JSON.stringify(bulkInfo)}" @click="handleTouchStart">
    <div class="r-cash-bulk-year">{{bulkInfo.duration}}</div>
    <div class="r-cash-bulk-rmb">{{bulkInfo.spend}}</div>
    <input type="radio" :value="bulkInfo" v-model="value" @change="handleChange">
  </div>
</template>

<script>
import Emitter from 'recharger/src/utils/mixin/emitter'

export default {
  name: 'RCashBulk',
  mixins: [Emitter],
  props: {
    bulkInfo: {}
  },
  data () {
    return {
      props: {},
      duration: '',
      spend: '',
      isActive: false
    }
  },
  computed: {
    value: {
      get () {
        // console.log(this.bulkInfo,this._cashBulkGroup.value, value)
        return this._cashBulkGroup.value
      }
    },
    _cashBulkGroup () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name !== 'RCashBulkGroup') {
          parent = parent.$parent
        } else {
          return parent
        }
      }
      return false
    }
  },
  mounted () {
  },
  methods: {
    handleTouchStart (evt) {
      this._cashBulkGroup.$emit('input', this.bulkInfo)
    },
    handleChange () {
      this.$nextTick(() => {
        this.dispatch('RCashBulkGroup', 'handleChange', this.value)
      })
    }
  }
}
</script>
