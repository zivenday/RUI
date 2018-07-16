/*
 * @Description: undefined
 * @author: zhongw@corp.21cn.com
 * @Date: 2018-07-16 17:05:49
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-07-16 17:05:49
 */
<template>
  <div class="r-carousel" :style="[{width:pxToview(width),height:pxToview(height)}]">
    <div ref="items" class="r-carousel__items" :style="pxToview(styles)" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd" @touchcancel="onTouchEnd">
      <slot/>
    </div>
    <div class="r-carousel__dots">
      <span v-for="(item,index) in Array.from(items)" :key="index" :class="{'is-active':index===currentIndex}"></span>
    </div>
  </div>
</template>
<script>
import StyleFun from '../../utils/mixin/style.js'
import Touch from '../../utils/touch'

export default {
  name: 'RCarousel',
  componentName: 'RCarousel',
  props: {
    width: { type: [String, Number], default: '100%' },
    height: [String, Number],
    duration: {
      type: Number,
      default: 500
    },
    delay: {
      type: Number,
      default: 2
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  mixins: [StyleFun, Touch],
  computed: {
    styles () {
      return {
        width: this.all,
        transitionDuration: `${!this.isTouch ? this.duration : this.getTouchDuration()}ms`,
        transform: `translateX(${this.offset}px)`
      }
    }
  },
  data () {
    return {
      items: [],
      offset: 0,
      currentIndex: 0,
      all: 0,
      wh: 0,
      isTouch: false,
      speed: 0,
      end: false,
      recoverDuration: 0,
      moving: false,
      end: false
    }
  },
  provide () {
    return {
      rCarousel: this
    }
  },
  watch: {
    offset: {
      handler (val, oldVal) {
        if (!this.isTouch && oldVal !== undefined) {
          this.currentIndex = (this.currentIndex === this.count - 1) ? 0 : ++this.currentIndex
        }
      },
      immediate: true
    }
  },
  mounted () {
    this.items = this.$el.querySelectorAll('[class=r-carousel-item]')
    console.log(this.items)
    this.count = this.items.length
    const rect = this.$el.getBoundingClientRect()
    this.wh = rect.width
    this.speed = rect.width / this.duration
    this.all = this.wh * this.count
    if (this.autoPlay && this.count - 1 > 0) {
      this.autoplay()
    }
  },
  methods: {
    getTouchDuration () {
      // 如果是正在滑动，说明手指正在滑到，则不要有延迟
      if (this.moving) {
        return 0
      // 如果滑动已经结束，这设置滑动时间，图片按照移动的速度滑到对应位置
      } else {
        return 200
      }
    },
    onTouchStart (ev) {
      ev.stopPropagation()
      // ev.stopImmediatePropagation()
      ev.preventDefault()// 阻止默认动作，滚动条
      // document.body.classList.add('no-touch-action')
      this.isTouch = true
      this.moving = false
      clearInterval(this.interval)
      this.touchStart(ev)
      console.log('start:', ev)
    },
    onTouchMove (ev) {
      ev.preventDefault()
      this.moving = true
      this.touchMove(ev)
      if (this.offsetX < this.wh) {
        this.transform()
      } else {

      }
    },
    onTouchEnd (ev) {
      ev.preventDefault()
      this.touchEnd(ev)
      const num = this.count - 1
      this.end = true
      this.moving = false
      // 当滑动距离超过轮播图宽度一半时，或者手指快速滑动时，滑动图片
      if (this.offsetX >= this.wh / 2 || this.offsetT < 300) {
        // 如果方向是左滑动，并且当前不是第一张图，则滑动图片，index自减
        if (this.deltaX > 0 && this.currentIndex !== 0) {
          this.offset = -(this.wh * --this.currentIndex)
          // 如果方向是右滑动，并且当前不是最后一张图，则滑动图片，index自增
        } else if (this.deltaX < 0 && this.currentIndex !== num) {
          this.offset = -(this.wh * ++this.currentIndex)
        } else {
          // 其他则回到当前index的位置
          this.offset = -(this.wh * this.currentIndex)
        }
      } else {
        // 其他则回到当前index的位置
        this.offset = -(this.wh * this.currentIndex)
      }
      this.autoplay()
    },
    onTouchCancel () {
      this.isTouch = false
    },
    autoplay () {
      this.interval = setInterval(() => {
        console.log(111)
        this.isTouch = false
        this.setCurrentIndex()
      }, this.delay * 1000)
    },
    setCurrentIndex () {
      this.transform()
      this.$nextTick(() => {
        clearInterval(this.interval)
        const t = this.duration + this.delay * 1000
        this.interval = setInterval(() => { this.setCurrentIndex() }, t)
      })
    },
    transform () {
      const num = this.count - 1
      if (!this.isTouch) {
        this.offset = this.currentIndex !== num ? -(this.wh * (this.currentIndex + 1)) : 0
      } else {
        // console.log(this.deltaX)
        this.offset = -(this.wh * this.currentIndex) + this.deltaX
      }
    }
  }
}
</script>
