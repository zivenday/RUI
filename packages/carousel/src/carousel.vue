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
      isRecovey: false,
      recoverDuration: 0
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
      if (!this.isRecovey) {
        return 0
      } else {
        return 200
      }
    },
    onTouchStart (ev) {
      ev.stopPropagation()
      this.isTouch = true
      clearInterval(this.interval)
      this.touchStart(ev)
    },
    onTouchMove (ev) {
      ev.stopPropagation()
      this.touchMove(ev)
      this.offsetX < this.wh ? this.transform() : undefined
    },
    onTouchEnd (ev) {
      ev.stopPropagation()
      const num = this.count - 1
      this.isRecovey = true
      if (this.offsetX >= this.wh / 2) {
        if (this.deltaX > 0 && this.currentIndex !== 0) {
          this.offset = -(this.wh * --this.currentIndex)
        } else if (this.deltaX < 0 && this.currentIndex !== num) {
          this.offset = -(this.wh * ++this.currentIndex)
        } else {
          this.offset = -(this.wh * this.currentIndex)
        }
      } else {
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
