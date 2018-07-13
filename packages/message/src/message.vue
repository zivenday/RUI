<template>
  <transition name="msgbox-fade" @before-enter="beforeEnter" @after-leave="afterLeave">
    <div class="r-message-box" v-show="showBox" @touchmove.prevent.stop>
      <div class="r-message-box__mask" @touchstart="handleClose" :class="{'is-modal':options.hasModal}">
      </div>
      <div class="r-message-box__body" :class="{'is-select': options.$type==='input'||options.$type==='confirm'}">
        <div class="r-message-box__title" v-if="options.title">{{options.title}}</div>
        <div class="r-message-box__icon" v-if="options.iconShow">
          <r-icon :name="options.iconClass"></r-icon>
        </div>
        <div class="r-message-box__content" :class="{'is-select': options.$type==='input'||options.$type==='confirm'}">{{options.message}}</div>
        <div class="r-message-box__input" v-show="options.$type==='input'"></div>
        <div class="r-message-box__btn" v-show="options.$type==='alert'||options.$type==='loading'"></div>
        <div class="r-message-box__confirm" v-show="options.$type==='input'||options.$type==='confirm'">
          <a @click="handleCancel">取消</a>
          <a @click="handleConfirm">确定</a>
        </div>
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
        hasModal: false,
        closeOnPressEscape: false,
        closeOnClickModal: false,
        cancel: undefined,
        ensure: undefined
      }
    }
  },
  created () {
  },
  methods: {
    handleClose (e) { //
      e.stopPropagation()
      // console.log(this.closeOnClickModal)
      this.options.closeOnClickModal ? this.showBox = false : this.showBox = this.showBox
      this.$emit('close')
    },
    handleCancel () {
      console.log(12312312, Object.prototype.toString.call(this.options.cancel))
      Object.prototype.toString.call(this.options.cancel) === '[object Function]' ? this.options.cancel() : undefined
      this.$emit('cancel')
      this.$emit('close')
      this.showBox = false
    },
    handleConfirm () {
      Object.prototype.toString.call(this.options.ensure) === '[object Function]' ? this.options.ensure() : undefined
      this.$emit('ensure')
      this.$emit('close')
      this.showBox = false
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
