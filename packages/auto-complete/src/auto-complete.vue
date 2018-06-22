<template>
  <div class="r-auto-complete" v-clickoutside="close">
    <div class="r-auto-complete__inner" :style="{ width:getWidth(styles,width)}">
      <r-input type="transparent"  v-bind="$props" @input="handleChange" @focus="handleFocus" @blur="handleBlur">
        <!-- <slot></slot> -->
      </r-input>
    </div>
    <r-auto-suggestion :style="{ marginTop:getHeight(styles,height)}">
      <ul :style="{ width:getWidth(styles,width)}">
        <li @click="selectItem(item)" v-for="(item,index) in suggestions" :key="index" ref="suggestion" class="suggestion-item">
          <!-- <span @click="selectItem(item)"> -->
          {{item[valueKey]}}
          <!-- </span> -->
        </li>
      </ul>
    </r-auto-suggestion>
  </div>
</template>
<script>
import debounce from 'throttle-debounce/debounce'
import StyleFun from '../../utils/mixin/style.js'
import RAutoSuggestion from './auto-suggestion.vue'
import Emitter from '../../utils/mixin/emitter'
import Clickoutside from '../../utils/clickoutside'
export default {
  name: 'RAutoComplete',
  componentName: 'RAutoComplete',
  directives: {
    Clickoutside
    //   focus: {
    //     inserted: function (el, { value }) {
    //       if (value) {
    //         el.focus()
    //       }
    //     }
    //   }
  },
  props: {
    width: [String, Number],
    height: [String, Number],
    styles: Object,
    placeholder: String,
    inputType: String,
    fetchSuggestions: Function,
    value: [String, Number],
    valueKey: {
      type: [String, Number],
      default: 'value'
    }
  },
  mixins: [StyleFun, Emitter],
  data () {
    return {
      focusActive: false,
      suggestions: [],
      hasSuggestion: false,
      doc: document,
      debouncedGetData: function () { }
    }
  },
  computed: {
    dropState () {
      return this.hasSuggestion && this.focusActive
    }
  },
  watch: {
    dropState (val) {
      this.isFocus = val
      this.broadcast('RAutoSuggestion', 'visible', val)
      this.$emit('drop', val)
    },
    suggestions: {
      handler: function (val, oldVal) {
        this.hasSuggestion = val.length > 0 ? true : false
      },
      deep: true
    }
  },
  components: {
    RAutoSuggestion
  },
  // created () {
  //   this.doc.addEventListener('touchstart', (e) => { this.hide(e) })
  // },
  // destroyed () {
  //   this.doc.removeEventListener('touchstart')
  // },
  create () {
    this.debouncedGetData = debounce(this.debounce, val => {
      this.getData(val)
    })
  },
  mounted () {
    // const ua = navigator.userAgent.toLowerCase()
    // const isMobile = /ios|iphone|ipod|ipad|android/.test(ua)
    // if (isMobile) {
    //   const oHeight = document.documentElement.clientHeight
    //   window.onresize = () => { // 添加resize事件触发改变this.screenWidth
    //     const currentHeight = document.documentElement.clientHeight
    //     if (currentHeight < oHeight) {
    //       this.close()
    //     } else {
    //       this.style = { display: 'block' }
    //     }
    //   }
    // }

    this.getData('')
  },
  methods: {
    // a () {
    //   this.close()
    // },
    close (e) {
      this.focusActive = false
    },
    clickOn (event) {
    },
    // hide (e) {
    //   console.log(e)
    //   if (e.target.className !== 'suggestion-item') {
    //     this.isTouchSuggestions = true
    //   } else {
    //     this.isTouchSuggestions = false
    //   }
    // },
    getWidth (styles, width) {
      if (width) {
        return this.pxToview(width)
      } else if (styles) {
        return styles.width ? this.pxToview(styles.width) : ''
      } else {
        return ''
      }
    },
    getHeight (styles, height = '0') {
      if (height) {
        return this.pxToview(height)
      } else if (styles) {
        return styles.height ? this.pxToview(styles.height) : ''
      } else {
        return ''
      }
    },
    getData (queryString) {
      this.fetchSuggestions(queryString, (suggestions) => {
        this.suggestions = suggestions
      })
    },
    handleFocus (value) {
      this.focusActive = true
      this.$emit('focus')
      this.debouncedGetData(value)
    },
    handleChange (value) {
      this.$emit('input', value)
      this.getData(value)
    },
    handleBlur (value) {
      this.isFocus = false
      this.$emit('blur', value)
    },
    selectItem (item) {
      this.focusActive = false
      console.log('选择了')
      this.$emit('input', item[this.valueKey])
      this.$emit('select', item)
    }
  },
  beforeDestroy () {

  }
}
</script>
