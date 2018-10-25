<template>
  <div class="r-coupon" :class="'r-coupon--'+(active?'active':'failure')">
    <div class="r-coupon__header" :class="active?'is-active':'is-failure'">
      <div >
        <span class="header__cur">￥</span>
        <span class="header__price">{{value}}</span>
        <span class="header__name">优惠券</span>
      </div>
      <div class="header__limit">{{limit}}</div>
      <div class="header__validity">{{validity}}</div>
    </div>
    <!-- <div class="r-coupon__line" :class="active?'is-active':'is-failure'" ></div> -->
    <div class="r-coupon__footer" align="center" :class="active?'is-active':'is-failure'">
      <r-button v-if="active" type="primary" :styles="buttonStyles" @click="handleClick">立即领取</r-button>
      <div v-else >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RCoupon',
  componentName: 'RCoupon',
  props: {
    active: {
      type: Boolean,
      default: true
    },
    limit: {
      type: String,
      default: ''
    },
    validity: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: '#fff'
    },
    buttonStyles: {
      type: Object,
      default: () => {
        return {
          width: '74px',
          height: '30px',
          backgroundImage: 'linear-gradient(90deg, #FF9D21 0%, #FD6B00 100%)',
          borderRadius: '100px',
          border: '0px',
          marginTop: 'calc(50% - 24px)',
          fontFamily: 'PingFangSC-Regular',
          fontSize: '14px',
          padding: 0
        }
      }
    },
    value: {
      type: Number,
      default: 0,
      validator: function (value) {
        return value >= 0
      }
    }
  },
  data () {
    return {
      style: {
        background: 'green',
        baseSytles: {
          margin: '0 auto'
        }
      }
    }
  },
  mounted () {
    // document.getElementsByClassName('r-coupon').style.sheet.addRule('.ss::before', 'background: green') // 兼容IE浏览器
    // document.getElementsByClassName('r-coupon').style.sheet.insertRule('.ss::before { background: green }', 0) // 支持非IE的现代浏览器
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
