<template>
  <form class="r-form" :rules="rules">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'RForm',
  componentName: 'RForm',
  props: {
    model: Object,
    rules: Object,
    labelWidth: Number
  },
  provide () {
    return {
      rForm: this
    }
  },
  data () {
    return {
      fields: []
    }
  },
  created () {
    this.$on('r.form.addField', (field) => {
      if (field) {
        this.fields.push(field)
      }
    })
    this.$on('r.form.removeField', (field) => {
      if (field.prop) {
        this.fields.splice(this.fields.indexOf(field), 1)
      }
    })
  },
  watch: {
    rules () {
      this.validate()
    }
  },
  methods: {
    resetForm () {
      if (this.$model) {
        this.fields.forEach(field => {
          field.resetForm()
        })
      }
    },
    validate (callback) {
      if (!this.model) {
        console.warn('[Element Warn][Form]model is required for validate to work!')
        return
      }

      let promise
      // if no callback, return promise
      if (typeof callback !== 'function' && window.Promise) {
        promise = new window.Promise((resolve, reject) => {
          callback = function (valid) {
            valid ? resolve(valid) : reject(valid)
          }
        })
      }

      let valid = { isValid: true }
      let count = 0
      let errorlist = []
      // 如果需要验证的fields为空，调用验证时立刻返回callback
      if (this.fields.length === 0 && callback) {
        callback(valid)
      }
      this.fields.forEach((field, index) => {
        field.validate('', res => {
          // console.log(index, 'wwwwww', res)
          if (!res.isValid) {
            errorlist.push(res)
            valid.errorlist = errorlist
            valid.isValid = res.isValid
          }
          if (typeof callback === 'function' && ++count === this.fields.length) {
            callback(valid)
          }
        })
      })

      if (promise) {
        return promise
      }
    }
  }

}
</script>
