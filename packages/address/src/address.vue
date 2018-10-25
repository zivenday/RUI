<template>
  <div class="r-address">
    <div class="r-address__inner">
      <span @click="handleClick">
        <r-icon :name="checked?'xuanzhong1':'weixuanzhong1'" :class="{'is-checked':checked}"></r-icon>
        <input type="radio" :value="info" v-model="value" @change="handleChange">
      </span>
      <div class="r-address__inner__info">
        <div>
          <span>{{info[`${nameKey}`]}}</span>
          <span>{{info[`${telKey}`]}}</span>
        </div>
        <div class="r-address__inner__info__addr" style="word-wrap: break-word; word-break: normal;">{{info[`${addrKey}`]}}</div>
      </div>
    </div>
    <div class="r-address__bottom">
      <span class="r-address__btn" @click="handleDel(info)">
        <r-icon name="shanchu"></r-icon>
        <span> 删除</span>
      </span>
      <span class="r-address__btn" @click="handleEdit(info)">
        <r-icon name="bianji"></r-icon>
        <span> 编辑</span>
      </span>
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
import Emitter from '../../utils/mixin/emitter'
export default {
  name: 'RAddress',
  componentName: 'RAddress',
  mixins: [Emitter],
  props: {
    info: Object,
    nameKey: {
      type: String,
      default: 'name'
    },
    telKey: {
      type: String,
      default: 'tel'
    },
    addrKey: {
      type: String,
      default: 'addr'
    }
  },
  computed: {
    value: {
      get () {
        return this._addressGroup ? this._addressGroup.value : this.info
      },
      set: function () {
      }
    },
    checked () {
      if (this._addressGroup) {
        return JSON.stringify(this.value) === JSON.stringify(this.info)
      }
    },
    _addressGroup () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name !== 'RAddressGroup') {
          parent = parent.$parent
        } else {
          return parent
        }
      }
      return false
    }
  },
  data () {
    return {

    }
  },
  methods: {
    handleChange (event) {
      this.$nextTick(() => {
        this.dispatch('RAddressGroup', 'handleChange', event.target._value)
      })
    },
    handleClick () {
      if (this._addressGroup) {
        this._addressGroup.$emit('input', this.info)
      } else {
        this.$emit('input', this.info)
      }
    },
    handleDel (info) {
      this.$emit('del', info)
    },
    handleEdit (info) {
      this.$emit('edit', info)
    }
    // if (JSON.stringify(this.value) === JSON.stringify(this.info)) {
    //   this.$nextTick(() => {
    //     this.checked = true
    //   })
    // }
    // console.log('????', JSON.stringify(this.value) === JSON.stringify(this.info), val, this.info)
  }
}
</script>
