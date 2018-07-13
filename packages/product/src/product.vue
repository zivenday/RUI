/*
 * @Description: undefined
 * @author: zhongw@corp.21cn.com
 * @Date: 2018-07-05 10:10:10
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-07-13 09:57:41
 */
<template>
  <div class="r-product">
    <div class="r-product__show">
      <r-carousel :height="320">
        <r-carousel-item v-for="(pic,index) in showPicList" :key="index">
          <img :src="pic.src" :alt="pic.alt?pic.alt:''">
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
      <div>运费：免邮</div>
      <div>
        <r-icon name="correct"></r-icon>
        <span>品质保证</span>
        <r-icon name="correct"></r-icon>
        <span>全面质检</span>
      </div>
    </div>
    <div class="r-product__navbar">
      <r-page-navbar @click="skuClick" :height="40">
        <span>选择：{{sku.name?sku.name:'套餐'}}</span>
      </r-page-navbar>
      <r-page-navbar @click="paramerClick" :height="40">
        <span>商品参数</span>
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
          <img :src="pic.src" :alt="pic.alt?pic.alt:''">
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
    sku: {
      type: Object,
      default: () => {
        return {
          name: '套餐'
        }
      }
    },
    product: {
      type: Object,
      default: () => {
        return {
          name: '商品',
          price: '价格'
        }
      }
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
    paramerClick () {
      this.$emit('param-click')
    }
  }
}
</script>
