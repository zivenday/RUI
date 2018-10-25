<template>
  <div class="r-form-item" :class="[{
       'is-error': validateState === 'error',
       'is-success': validateState === 'success'
       }]">
    <div style="width:100%">
      <label v-if="label" :style="{width: pxToview(labelWidth)}">{{label}}</label>
      <slot :validateState="validateState" :validateMessage="validateMessage"></slot>
    </div>
    <div v-if="validateState === 'error'&& defaultErrorTips " :style="{paddingLeft: pxToview(labelWidth+10)}" class="r-form-item__error">
      {{validateMessage}}
    </div>
  </div>
</template>

<script>
import Schema from 'async-validator'
import emitter from '../../utils/mixin/emitter.js'
import objectAssign from '../../utils/merge'
import { noop, getPropByPath } from '../../utils/util'
import StyleFun from '../../utils/mixin/style'

export default {
  name: 'RFormItem',
  componentName: 'RFormItem',
  inject: ['rForm'],
  props: {
    label: String,
    value: [String, Number],
    prop: [String, Number, Object],
    defaultErrorTips: {// 是否使用默认的错误提示风格，默认是
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: undefined
    },
    rules: [Object, Array]
  },
  mixins: [emitter, StyleFun],
  computed: {
    form () {
      let parent = this.$parent
      let parentName = parent.$options.componentName
      while (parentName !== 'RForm') {
        if (parentName === 'RFormItem') {
          this.isNested = true
        }
        parent = parent.$parent
        parentName = parent.$options.componentName
      }
      return parent
    },
    fieldValue: {
      cache: false,
      get () {
        var model = this.form.model
        if (!model || !this.prop) { return }

        var path = this.prop
        if (path.indexOf(':') !== -1) {
          path = path.replace(/:/, '.')
        }
        return getPropByPath(model, path, true).v
      }
    }
  },
  data () {
    return {
      validateState: '',
      validateMessage: '',
      labelWidth: ''
    }
  },
  provide () {
    return {
      rFormItem: this
    }
  },
  mounted () {
    this.labelWidth = this.rForm ? this.rForm.labelWidth : ''
    // console.log('......', this.rForm.)
    this.dispatch('RForm', 'r.form.addField', [this])
    this.$on('r.form.change', val => { this.validate('change') })
  },
  methods: {
    resetForm () {
      // this.validateState = ''
      // this.validateMessage = ''
    },
    clearValidate () {
      this.validateState = ''
      this.validateMessage = ''
    },
    validate (trigger, callback = noop) {
      var rules = this.getFilteredRule(trigger)
      // console.log('trigger=', trigger, rules)
      if ((!rules || rules.length === 0) && this.required === undefined) {
        callback({ isValid: true })
        return true
      }
      this.validateState = 'validating'
      var descriptor = {}
      if (rules && rules.length > 0) {
        rules.forEach(rule => {
          delete rule.trigger
        })
      }
      descriptor[this.prop] = rules

      var validator = new Schema(descriptor)
      let model = {}
      model[this.prop] = this.fieldValue
      validator.validate(model, (errors, fields) => {
        if (errors) {
          this.validateState = 'error'
          this.validateMessage = errors[0].message
          callback({ isValid: false, error: errors[0].message })
        } else {
          this.validateState = 'success'
          callback({ isValid: true })
        }
        // validation passed
      })
    },
    getRules () {
      var formRules = this.form.rules
      var selfRules = this.rules
      var requiredRule = this.required !== undefined ? { required: !!this.required } : []

      formRules = formRules ? getPropByPath(formRules, this.prop || '').o[this.prop || ''] : []

      return [].concat(selfRules || formRules || []).concat(requiredRule)
    },
    getFilteredRule (trigger) {
      var rules = this.getRules()
      return rules.filter(rule => {
        return !rule.trigger || rule.trigger.indexOf(trigger) !== -1
      }).map(rule => objectAssign({}, rule))
    }
  },
  beforeDestroy () {
    // console.log('!!!!!!!!!!!!!')
    this.dispatch('RForm', 'r.form.removeField', [this])
  }
}
</script>
