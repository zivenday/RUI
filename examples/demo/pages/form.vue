<template>
  <div>
    <p></p>
    <r-lead>表单：</r-lead>
    <r-form :model="dynamicValidateForm" ref="dynamicValidateForm" :label-width="40">
      <r-form-item prop="email" label="邮箱" :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur'},
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change'}
    ]">
        <r-input v-model="dynamicValidateForm.email" :inputSize="'small'"></r-input>
      </r-form-item>
      <r-form-item v-for="(domain, index) in dynamicValidateForm.domains" :label="'域名' + index" :key="domain.key" :prop="'domains.' + index + '.value'" :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }">
        <template slot-scope="v">
          <r-input v-model="domain.value" :inputSize="'small'"></r-input>
          <r-button @click.prevent="removeDomain(domain)" size="small">删除</r-button>
        </template>
      </r-form-item>
      <r-form-item>
        <r-button type="primary" @click="submitForm('dynamicValidateForm')" size="small">提交</r-button>
        <r-button @click="addDomain" size="small">新增域名</r-button>
        <!-- <r-button @click="resetForm('dynamicValidateForm')" size="small">重置</r-button> -->
      </r-form-item>
    </r-form>
    <p></p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dynamicValidateForm: {
        domains: [{
          value: ''
        }],
        email: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        // RMessageBox.alert()
      })
    },
    addDomain () {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now()
      })
    },
    removeDomain (item) {
      var index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="scss" scoped>
.r-form-item {
  .r-button {
    margin-top: 3px;
    margin-left: 3px;
  }
}
</style>
