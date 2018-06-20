<template>
  <transition name="msgbox-fade" @before-enter="beforeEnter" @after-leave="afterLeave">
    <div class="r-message-box" v-show="showBox">
      <div class="r-message-box__mask" @touchstart="showChange">
      </div>
      <div class="r-message-box__body">
        <div class="r-message-box__title" v-if="options.title">{{options.title}}</div>
        <div class="r-message-box__icon" v-if="options.iconShow">
          <r-icon :name="options.iconClass"></r-icon>
        </div>
        <div class="r-message-box__content">{{options.message}}</div>
        <div class="r-message-box__input" v-show="options.$type==='input'"></div>
        <div class="r-message-box__btn" v-show="options.$type==='alert'||options.$type==='loading'"></div>
        <div class="r-message-box__confirm" v-show="options.$type==='input'||options.$type==='confirm'"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'RMessage',
  data () {
    return {
      showBox: false,
      defautIconClass: 'iconfont',
      options: {
        message: '',
        title: '',
        iconShow: false,
        iconClass: '',
        closeOnPressEscape: true
      }
    }
  },
  created () {
  },
  methods: {
    showChange () { //
      this.closeOnPressEscape ? this.showBox = false : this.showBox = this.showBox
    },
    beforeEnter: function (el) {
      console.log('准备进入')
    },
    enter: function (el, done) {
      console.log('进入')
    },
    afterEnter: function (el) {
      console.log('进入之后')
    },
    leave: function (el, done) {
      // ...
      console.log('离开')
    },
    afterLeave: function (el) {
      // ...
      document.body.classList.remove('hidden-overflow')
      console.log('离开之后')
    }
  }
}
</script>
