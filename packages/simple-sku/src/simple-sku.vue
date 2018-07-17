/*
 * @Author: zhongw@corp.21cn.com
 * @Date: 2018-07-01 17:37:07
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-07-17 14:57:34
 */
<template>
  <r-bottom-pop class="r-simple-sku" :show="current" @close="handleClose">
    <div class="sku__info">
      <div class="sku__info--show"><img :src="packageList[currentIndex].src" :alt="packageList[currentIndex].alt"></div>
      <div class="sku__info--detail">
        <div>￥{{packageList[currentIndex].price}}</div>
        <div>已选择：{{packageList[currentIndex].name}}</div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="sku__package" v-show="packageList.length>1">
      <div>
        <div>套餐</div>
        <div>
          <span v-for="(item,index) in packageList" :key="index" @click="handleSkuClick(index)" :class="{'is-checked':currentIndex===index}">{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="sku__num">
      <div>购买数量</div>
      <r-count-bar v-model="value" :min="min" :max="max" :disabled="disabled" :disabledInput="disabledInput" @input="handleInput" @change="handleChange" @blur="handleBlur" @plus="handlePlus" @mins="handleMins"></r-count-bar>
    </div>
    <div class="sku__btn" @click="handleSubmit">
      确定
    </div>
  </r-bottom-pop>
</template>
<script>
export default {
  name: 'RSimpleSku',
  componentName: 'RSimpleSku',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    packageList: {
      type: Array,
      default: () => {
        return [{ price: '默认价格', src: '', alt: '商品', name: '默认名字' }, { price: '默认2', src: '111', alt: '商品1', name: '默认名字1' }]
      }
    },
    active: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 100
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disabledInput: {
      type: Boolean,
      default: false
    }

  },
  watch: {
    show (val) {
      this.current = val
    }
  },
  data () {
    return {
      current: false,
      showDialog: false,
      currentIndex: 0,
      num: 0,
      value: 1
    }
  },
  mounted () {
    this.value = this.count
    this.num = this.packageList.length - 1
    this.currentIndex = (this.active > this.num || this.active < 0) ? 0 : this.active
  },
  methods: {
    handleClose () {
      this.$emit('update:show', false)
      this.$emit('close')
    },
    handleChange (val) {
      this.value = val
      this.$emit('change', val)
    },
    handleInput (val) {
      this.value = val
      this.$emit('input', val)
    },
    handleBlur (val) {
      this.value = val
      this.$emit('blur', val)
    },
    handleMins (val) {
      this.value = val
      this.$emit('mins', val)
    },
    handlePlus (val) {
      this.value = val
      this.$emit('plus', val)
    },
    handleSubmit () {
      const data = {
        count: this.value,
        sku: this.packageList[this.currentIndex]
      }
      this.handleClose()
      this.$nextTick(() => {
        this.$emit('submit', data)
      })
    },
    handleSkuClick (index) {
      if (this.currentIndex !== index) {
        this.currentIndex = index
        this.$emit('sku-change', this.packageList[this.currentIndex])
      }
    }
  }
}
</script>
