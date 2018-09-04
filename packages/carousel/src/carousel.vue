/*
 * @Description: undefined
 * @author: zhongw@corp.21cn.com
 * @Date: 2018-07-16 17:05:49
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-08-30 23:41:55
 */
<template>
  <div class="r-carousel" :style="{width:'100%',height:!isNullHight?pxToview(height):pxToview(itemHeight)}">
    <div ref="items" class="r-carousel__items" :style="pxToview(styles)" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd" @touchcancel="onTouchEnd" @transitionend="onTransition">
      <slot/>
    </div>
    <div class="r-carousel__dots" v-show="fields.length>1">
      <span v-for="(item,index) in fields" :key="index" :class="{'is-active':index===currentIndex}"></span>
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
    height: {
      type: [String, Number],
      default: 0
    },
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
        width: this.allWidth,
        height: this.itemHeight,
        transitionDuration: `${!this.isTouch ? this.duration : this.getTouchDuration()}ms`,
        transform: `translateX(${this.offset}px)`
      }
    },
    isNullHight () {
      return this.pxToview(this.height) === '0vw'
    }
  },
  data () {
    return {
      items: [],
      offset: 0,
      currentIndex: 0,
      all: 0,
      itemHeight: 0,
      itemWidth: 0,
      isTouch: false,
      speed: 0,
      recoverDuration: 0,
      moving: false,
      fields: [],
      allWidth: 0,
      count: 0
    }
  },
  created () {
    this.$on('r.carousel.addField', (field) => {
      if (field) {
        this.fields.push(field)
        this.count = this.fields.length
        this.allWidth = this.itemWidth * this.count + 'px'
        this.currentIndex = 0
        this.$el ? this.fetchSizeAction() : undefined
      }
    })
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
    this.fetchSizeAction()
    window.onresize = () => { // 添加resize事件触发改变this.screenWidth
      this.fetchSizeAction()
    }
    const self = this
    window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', self.fetchSizeAction, false)
    // setTimeout(() => {
    //     console.log('>>>>>>>', this.count)
    //   if (this.autoPlay && this.count - 1 > 0) {
    //     this.autoplay()
    //   }
    // }, 100)
  },
  methods: {
    fetchSizeAction () {
      // setTimeout(() => {
      this.count = this.fields.length
      const rect = this.$el.getBoundingClientRect()
      const { width } = rect
      this.itemWidth = width
      this.itemHeight = this.isNullHight ? width * 320 / 375 : this.height
      this.speed = rect.width / this.duration
      this.allWidth = this.itemWidth * this.count + 'px'
      if (this.autoPlay && this.count - 1 > 0) {
        clearInterval(this.interval)// 清除多余定时器
        this.autoplay()
      }
      // }, 1000)
    },
    getTouchDuration () {
      // 如果是正在滑动，说明手指正在滑到，则不要有延迟
      if (this.moving) {
        return 0
        // 如果滑动已经结束，这设置滑动时间，图片按照移动的速度滑到对应位置
      } else {
        return 200
      }
    },
    onTransition (ev) {
      this.$emit('change', this.currentIndex)
    },
    onTouchStart (ev) {
      // ev.stopPropagation()
      // // ev.stopImmediatePropagation()
      // ev.preventDefault()// 阻止默认动作，滚动条
      this.isTouch = true
      this.moving = false
      clearInterval(this.interval)
      console.log('????????????????', this.currentIndex)
      this.touchStart(ev)
    },
    onTouchMove (ev) {
      this.moving = true
      this.touchMove(ev)
      if (this.offsetX < this.itemWidth) {
        this.transform()
      } else {

      }
    },
    onTouchCancel (ev) {

    },
    onTouchEnd (ev) {
      this.touchEnd(ev)
      const num = this.count - 1
      this.moving = false
      // 当滑动距离超过轮播图宽度一半时，或者手指快速滑动时，滑动图片
      if (this.offsetX >= this.itemWidth / 2 || this.offsetT < 300) {
        // 如果方向是左滑动，并且当前不是第一张图，则滑动图片，index自减
        if (this.deltaX > 0 && this.currentIndex !== 0) {
          this.offset = -(this.itemWidth * --this.currentIndex)
          // 如果方向是右滑动，并且当前不是最后一张图，则滑动图片，index自增
        } else if (this.deltaX < 0 && this.currentIndex !== num) {
          this.offset = -(this.itemWidth * ++this.currentIndex)
        } else {
          // 其他则回到当前index的位置
          this.offset = -(this.itemWidth * this.currentIndex)
        }
      } else {
        // 其他则回到当前index的位置
        this.offset = -(this.itemWidth * this.currentIndex)
      }
      clearInterval(this.interval)// 再次清除多余的时间定时器
      console.log('-------', this.currentIndex)
      if (this.autoPlay && this.count - 1 > 0) {
        this.autoplay()
      }
    },
    autoplay () {
      this.interval = setInterval(() => {
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
      if (!this.isTouch) { // 如果是自动播放，则滑动到下一张图，否则是触摸滑动
        this.offset = this.currentIndex !== num ? -(this.itemWidth * (this.currentIndex + 1)) : 0
      } else {
        this.offset = -(this.itemWidth * this.currentIndex) + this.deltaX
      }
    }
  }
}
</script>
