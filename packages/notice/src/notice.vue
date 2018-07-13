/*
import { setInterval } from 'timers';
import { clearInterval } from 'timers';
 * @Author: zhongw@corp.21cn.com
 * @Date: 2018-06-29 10:43:38
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-07-03 16:13:24
 */
<template>
  <transition name='fade'>
    <div v-show="showBox" class="r-notice">
      <div class="r-notice__text">
        <transition-group name="r-zoom-in-bottom" tag="ul">
          <li ref="frame" v-for="(notice,index) in options.noticeList" :key="index" v-show="index===currentIndex">
            <span ref="notice" class="r-notice__text__span" :style="contentStyle(index)">{{notice}}</span>
          </li>
        </transition-group>
      </div>
      <span @click="handleClick" class="r-notice__close">
        <r-icon name="cuowu1"></r-icon>
      </span>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'RNotice',
  componentName: 'RNotice',
  data () {
    return {
      currentIndex: 0,
      showBox: false,
      options: {
        noticeList: [],
        speed: 2000, // ms
        scroll: 150, // px/s
        delay: 0 // s
      },
      num: 0,
      noticeWidth: [],
      frameWidth: 0,
      duration: 0,
      currentInterval: undefined,
      text: ''
    }
  },
  mounted () {
    // 实例化有延迟，这里适应性延迟
    setTimeout(() => {
      this.num = this.options.noticeList.length - 1
      this.frameWidth = this.$refs['frame'][0].getBoundingClientRect().width
      const t = this.setCurrentDuration()
      if (this.num !== 0) { // 多条通知时，进入定时器控制
        this.currentInterval = setInterval(() => { this.setCurrentIndex() }, t)
      }
    })
  },
  methods: {
    setCurrentIndex () {
      this.currentIndex = this.currentIndex === this.num ? 0 : ++this.currentIndex
      clearInterval(this.currentInterval)// 清除定时器，重新设置新的时间长度的定时器
      this.duration = 0
      this.$nextTick(() => {
        const t = this.setCurrentDuration()
        this.currentInterval = setInterval(() => { this.setCurrentIndex() }, t)
      })
    },
    setCurrentDuration () {
      const _w = this.getCurrentNoticeWidth()
      const _speed = this.options.speed
      const _scroll = this.options.scroll
      if (this.frameWidth >= _w) {
        return (_speed < 1000 || !_speed) ? 1000 : _speed
      } else {
        this.duration = (_w + this.frameWidth) / _scroll
        return this.duration * 1000
      }
    },
    contentStyle (index) {
      const _num = this.num
      if (this.duration > 0 && index === this.currentIndex) {
        this.$refs['notice'][this.currentIndex].classList.add(_num ? 'is-scroll' : 'is-scroll--infinite')
        return { paddingLeft: this.frameWidth + 'px', animationDelay: this.options.delay + 's', animationDuration: this.duration + 's' }
      } else {
        return {}
      }
    },
    getCurrentNoticeWidth () {
      // 保存各个文本的宽度
      this.noticeWidth[this.currentIndex] = this.noticeWidth[this.currentIndex] ? this.noticeWidth[this.currentIndex] : this.$refs['notice'][this.currentIndex].getBoundingClientRect().width
      return this.noticeWidth[this.currentIndex]
    },
    handleClick () {
      this.showBox = false
      this.$emit('close')
    }
  }
}
</script>
