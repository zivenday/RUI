<template>
  <div class="r-scroll-fresh" id="r-scroll-fresh" @touchstart="onTouchStart($event)" @touchmove="onTouchMove($event)" @touchend="onTouchEnd($event)">
    <section class="inner" :style="pxToview(styles)">
      <header class="pull-refresh">
        <slot name="pull-refresh">
          <span class="down-tip" v-if="isTouch&&deltaY>0&&deltaY<300">{{pullText}}</span>
          <span class="down-tip" v-if="isTouch&&deltaY>300&&!loading">{{loosenText}}</span>
          <span class="refresh-tip" v-if="!isTouch&&loading">{{loadingText}}</span>
        </slot>
      </header>
      <slot>
      </slot>
      <footer class="load-more" v-if="showLoadMoreBar">
        <slot name="load-more">
          <span v-if="noMore">{{noMoreText}}</span>
          <span v-if="!noMore&&loading">{{loadingText}}</span>
        </slot>
      </footer>
      <!-- <div class="nullData" v-show="dataList.noFlag">暂无更多数据</div> -->
    </section>
  </div>
</template>
<script>
import Touch from '../../utils/touch'
import styleFun from '../../utils/mixin/style'
import scrollUtils from '../../utils/scroll'
export default {
  name: 'RScrollFresh',
  mixins: [Touch, styleFun],
  props: {
    offset: {
      type: Number,
      default: 100 // 默认高度
    },
    enableInfinite: {
      type: Boolean,
      default: true
    },
    enableRefresh: {
      type: Boolean,
      default: true
    },
    dataList: {
      type: [Object, Array],
      default: () => { return [] },
      required: false
    },
    fetchMoreDistane: {
      type: Number,
      default: 200
    },
    noMore: {
      type: Boolean,
      default: false
    },
    showLoadMoreBar: {
      type: Boolean,
      default: true
    },
    pullText: {
      type: String,
      default: '继续下拉'
    },
    loosenText: {
      type: String,
      default: '松开刷新'
    },
    loadingText: {
      type: String,
      default: '加载中...'
    },
    noMoreText: {
      type: String,
      default: '暂无更多'
    },
    onRefresh: {
      type: Function,
      default: () => { },
      required: false
    },
    duration: {
      type: Number,
      default: 300
    },
    onInfinite: {
      type: Function,
      default: () => { },
      require: false
    }
  },
  computed: {
    styles () {
      return {
        transitionDuration: `${!this.isTouch ? this.duration : 0}ms`,
        transform: `translateY(${this.top}px)`
      }
    }
  },
  data () {
    return {
      top: 0,
      state: 0,
      startX: 0,
      startY: 0,
      isTouch: false,
      loading: false,
      downFlag: false // 用来显示是否加载中
    }
  },
  mounted () {
    this.refresh()
    document.getElementById('r-scroll-fresh').addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    document.getElementById('r-scroll-fresh') ? document.getElementById('r-scroll-fresh').removeEventListener('scroll') : undefined
  },
  methods: {
    onTouchStart (e) {
      console.log(e)
      this.touchStart(e)
      this.startScroll = this.$el.scrollTop || 0
      this.isTouch = true
    },
    handleScroll (ev) {
      // console.log(1111)
      const _t = ev.target
      const scrollT = scrollUtils.getScrollTop(_t)
      const scrollH = scrollUtils.getVisibleHeight(_t)
      const elemH = _t.scrollHeight
      const bottom = elemH - (scrollH + scrollT)
      // console.log(1111, bottom)
      if (bottom <= this.fetchMoreDistane && !this.noMore && !this.loading) {
        console.log('111111111')
        this.infinite()
      }
    },
    onTouchMove (e) {
      this.touchMove(e)
      console.log('>>>>>>', this.startScroll, e.targetTouches[0].pageY - this.startY - this.startScroll, this.deltaY)
      // 方向是向下拉,并且拉了一定距离
      if (this.startScroll === 0 && this.deltaY > 0) {
        this.top = (e.targetTouches[0].pageY - this.startY - this.startScroll) ** 0.8
        e.preventDefault()// 阻止微信页面整体底部body下拉
      }
      // const scrollTop = this.$el.scrollTop
      // const contentHeight = this.$el.childNodes[0].clientHeight
      // const bottom = contentHeight - scrollTop
      // // console.log('>>>>>>', bottom, this.fetchMoreDistane)
      // if (bottom <= this.fetchMoreDistane && !this.noMore && !this.loading && this.deltaY < 0) {
      //   // this.infinite()
      // }
    },
    onTouchEnd (e) {
      // 如果开始点击是滚动条到顶部的距离是0并且拉动高度超过300，则刷新，否则顶部pullFresh top为0
      if (this.startScroll === 0 && this.deltaY >= 300) {
        this.refresh()
      } else if (this.startScroll === 0 && this.deltaY < 300 && this.deltaY > 0) {
        this.isTouch = false
        this.top = 0
      }
    },
    refresh () {
      this.isTouch = false
      this.loading = true
      // this.top = this.offset
      this.onRefresh(this.refreshDone)
    },
    refreshDone () {
      this.top = 0
      this.loading = false
    },
    infinite () {
      if (!this.noMore) {
        this.loading = true
        this.onInfinite(this.infiniteDone)
      } else {
        this.downActive = true
      }
    },
    infiniteDone () {
      this.loading = false
    }
  }
}
</script>
