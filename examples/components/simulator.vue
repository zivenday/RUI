<template>
  <div class="simulator">
    <div class="simulator__nav">
      <div class="simulator__url">{{'Recharger'}}</div>
      <!-- <div class="simulator__url">{{ iframeHostName }}</div> -->
      <!--<div class="simulator__reload" @click="reloadIframe"></div> -->
    </div>
    <div :class="['simulator__container', { 'simulator-fixed': isFixed }]">
      <iframe ref="iframe" :src="srcWithTimestamp" :style="simulatorStyle" frameborder="0" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'simulator',

  props: {
    src: String
  },

  data () {
    return {
      scrollTop: window.scrollY,
      iframeHostName: '',
      windowHeight: window.innerHeight
    }
  },

  mounted () {
    window.addEventListener('scroll', () => {
      this.scrollTop = window.scrollY
    })
    window.addEventListener('resize', () => {
      this.windowHeight = window.innerHeight
    })

    const { iframe } = this.$refs
    if (iframe) {
      if (iframe.contentDocument.readyState === 'complete') {
        setTimeout(this.onSrcChanged, 0)
      } else {
        iframe.onload = () => {
          this.onSrcChanged()
        }
      }
    }
  },

  watch: {
    src () {
      this.onSrcChanged()
    }
  },

  computed: {
    srcWithTimestamp () {
      const now = `rand=${Date.now()}`
      return this.src + (this.src.indexOf('?') === -1 ? '?' : '&') + now
      // return this.src
    },

    isFixed () {
      return this.scrollTop > 60
    },

    simulatorStyle () {
      const height = Math.min(680, this.windowHeight - 150)
      return {
        // height: height + 'px'
      }
    }
  },

  methods: {
    reloadIframe () {
      const { iframe } = this.$refs
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.location.reload()
      }
    },
    onSrcChanged () {
      const { iframe } = this.$refs
      // console.log('////', iframe && iframe.contentWindow)
      if (iframe && iframe.contentWindow) {
        if (this.src.indexOf('://') !== -1) {
          this.iframeHostName = this.src.split('://')[1].split('/')[0]
          console.log('this.iframeHostName', this.iframeHostName)
        } else {
          this.iframeHostName = iframe.contentWindow.location.host || location.host
          console.log('this.iframeHostName', this.iframeHostName)
        }
      }
    }
  }
}
</script>

<style lang="scss" type="text/scss">
@import "../assets/scss/variable.scss";

.simulator {
  z-index: -3;
  // position: relative;
  // overflow: hidden;
  // border-radius: 6px;
  // box-sizing: border-box;
  // background: #f1f1f1;
  height: 100%;
  // &-fixed {
  //   position: fixed;
  //   top: $re-doc-padding;
  // }

  iframe {
    padding-top: 100px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-left: 3px;
    padding-right: 3px;
        border-radius: 0 0 35px 35px;
  }

  &__nav {
    position: absolute;
    width: 310px;
    height: 100px;
    background: #999 url(../assets/image/ios_new_features_header1_2x.png)
      no-repeat;
    background-size: 100% 100%;
    z-index: -1;
  }

  &__url {
    left: 20px;
    top: 54px;
    font-size: 14px;
    position: absolute;
    text-align: center;
    font-weight: bold;
    line-height: 28px;
    border-radius: 5px;
    width: 265px;
    height: 30px;
    background-color: #fff;
    opacity: 0.7;
    // font-family: PingFang SC, Helvetica Neue, Helvetica, Arial, sans-serif;

    /*@media (max-width: 1300px) {*/
    /*top: 21px;*/
    /*line-height: 24px;*/
    /*}*/
  }
  &__container {
    height: 100%;
    border-radius: 0 0 35px 35px;
  }

  &__reload {
    top: 25px;
    right: 10px;
    width: 28px;
    height: 28px;
    cursor: pointer;
    position: absolute;
  }
}
</style>
