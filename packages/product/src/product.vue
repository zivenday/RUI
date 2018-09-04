/*
 * @Description: undefined
 * @author: zhongw@corp.21cn.com
 * @Date: 2018-07-05 10:10:10
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-07-31 16:58:48
 */
<template>
  <div class="r-product">
    <div class="r-product__show">
      <r-carousel>
        <r-carousel-item v-for="(pic,index) in showPicList" :key="index">
          <img v-lazy="pic[`${srcKey}`]" :alt="pic.alt?pic.alt:''">
        </r-carousel-item>
      </r-carousel>
    </div>
    <div class="r-product__info">
      <div>{{product.name}}</div>
      <div>
        <span>￥</span><span>{{product.price}}</span>
      </div>
    </div>
    <div class="r-product__tag">
      <div>
        <span>运费</span>
        <span>{{carriage}}</span>
      </div>
      <div v-for="(service,index) in serviceList" :key="index+'0'">
        <span>服务</span>
        <r-icon name="correct" :index="index+'0'"></r-icon>
        <span style="color:#444">{{service[`${serviceKey}`]}}</span>
      </div>
    </div>
    <div class="r-product__navbar">
      <r-page-navbar @click="skuClick" :height="40" v-for="(choice,index) in choiceList" :key="index+'1'">
        <span>规格</span>
        <span>选择</span>
        <span v-if="index<=2">{{choice[`${choiceKey}`]}}</span>
        <span v-if="index>2">...</span>
      </r-page-navbar>
      <r-page-navbar @click="paramClick" :height="40" v-for="(param,index) in paramList" :key="index+'2'">
        <span>参数</span>
        <span v-if="index<=2">{{param[`${paramKey}`]}}</span>
        <span v-if="index>2">...</span>
      </r-page-navbar>
    </div>
    <div class="r-product__detail">
      <div>
        <span></span>
        <span> 商品详情 </span>
        <span></span>
      </div>
      <div>
        <div v-for="(pic,index) in detailPicList" :key="index">
          <img v-lazy="pic[`${srcKey}`]" :alt="pic.alt?pic.alt:''">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StyleFun from '../../utils/mixin/style.js'
export default {
  name: 'RProduct',
  componentName: 'RProduct',
  mixins: [StyleFun],
  props: {
    showPicList: Array,
    detailPicList: Array,
    carriage: {
      type: [Number, String],
      default: '免邮'
    },
    serviceList: {
      type: Array,
      default: () => {
        return [{
          name: '1年保修'
        }]
      }
    },
    choiceList: {
      type: Array,
      default: () => {
        return [{
          name: '清晰度'
        }]
      }
    },
    paramList: {
      type: Array,
      default: () => {
        return [{
          name: '清晰度'
        }]
      }
    },
    product: {
      type: Object,
      default: () => {
        return {
          name: '商品',
          price: 100
        }
      }
    },
    srcKey: {
      type: String,
      default: 'src'
    },
    choiceKey: {
      type: String,
      default: 'name'
    },
    serviceKey: {
      type: String,
      default: 'name'
    },
    paramKey: {
      type: String,
      default: 'name'
    }
  },
  data () {
    return {

    }
  },
  methods: {
    skuClick () {
      this.$emit('sku-click')
    },
    paramClick () {
      this.$emit('param-click')
    }
  }
}
</script>
