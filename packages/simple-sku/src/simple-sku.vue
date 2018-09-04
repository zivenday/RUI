/*
 * @Author: zhongw@corp.21cn.com
 * @Date: 2018-07-01 17:37:07
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-08-28 11:55:03
 */
<template>
  <r-bottom-pop class="r-simple-sku" :show="current" @close="handleClose">
    <div class="sku__info">
      <div class="sku__info--show" :style="style(currentIndex,srcKey)"></div>
      <div class="sku__info--detail">
        <div>￥{{packageList[currentIndex][`${priceKey}`]}}</div>
        <div>已选择：{{packageList[currentIndex][`${nameKey}`]}}</div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="sku__choice">
      <div class="sku__package" v-show="packageList.length>0">
        <div>
          <div>套餐</div>
          <div>
            <span v-for="(item,index) in packageList" :key="index" @click="handleSkuClick(item,index)" :class="{'is-checked':currentIndex===index}">{{item[`${nameKey}`]}}</span>
          </div>
        </div>
      </div>
      <div class="sku__num">
        <div>购买数量</div>
        <r-count-bar v-model="value" :min="min" :max="max" :disabled="disabled" :disabledInput="disabledInput" @input="handleInput" @change="handleChange" @blur="handleBlur" @plus="handlePlus" @mins="handleMins"></r-count-bar>
      </div>
    </div>
    <div class="sku__btn" @click="handleSubmit" :class="disabledBuy?'is-disabled':''">
      {{disabledBuy?'商品缺货':'确定'}}
    </div>
  </r-bottom-pop>
</template>
<script>
export default {
  name: 'RSimpleSku',
  componentName: 'RSimpleSku',
  props: {
    srcKey: {
      type: String,
      default: 'src'
    },
    priceKey: {
      type: String,
      default: 'price'
    },
    nameKey: {
      type: String,
      default: 'name'
    },
    packageKey: {
      type: String,
      default: 'count'
    },
    show: {
      type: Boolean,
      default: false
    },
    packageList: {
      type: Array,
      default: () => [{ price: '100', src: '', alt: '商品', name: '默认名字' }]
    },
    active: {
      type: Number,
      default: 0
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
    },
    packageList: {
      handler: function (List) {
        this.currentIndex = this.active
        this.currentPackage = List[this.currentIndex]
        this.initMax(this.active)
      },
      deep: true
    },
    currentIndex (val) {
      this.initMax(val)
    }
  },
  data () {
    return {
      current: false,
      showDialog: false,
      currentIndex: 0,
      currentPackage: {},
      // num: 0,
      value: 1,
      min: 1,
      max: 100,
      disabledBuy: false
    }
  },
  mounted () {
    // this.currentIndex = this.active
  },
  methods: {
    style (index, key) {
      return {
        backgroundImage: ' url(' + this.packageList[index][`${key}`] + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }
    },
    initMax (currentIndex) {
      const max = this.packageList[currentIndex][`${this.packageKey}`]
      this.max = max > 0 ? max : 1
      this.disabledBuy = max <= 0
    },
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
      if (this.currentPackage[`${this.packageKey}`] > 0) {
        const data = {
          count: this.value,
          sku: this.packageList[this.currentIndex]
        }
        this.handleClose()
        this.$nextTick(() => {
          this.$emit('submit', data)
        })
      }
    },
    handleSkuClick (item, index) {
      if (this.currentIndex !== index) {
        // if (item[`${this.packageKey}`] > 0) {
        this.currentIndex = index
        this.currentPackage = item
        this.initMax(index)
        this.$emit('sku-change', item)
        // } else {
        //   // this.max = 1
        // }
      }
    }
  }
}
</script>
