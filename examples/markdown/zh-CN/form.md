# Form 表单
本页介绍表单
## 单独引入
```JavaScript
import { RForm } from 'recharger'

import { RFormItem } from 'recharger'

Vue.use(RForm)

Vue.use(RFormItem)
```
## 代码演示

```Html
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
      </r-form-item>
    </r-form>
```
```JavaScript
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
```
## 表单属性 Form-Attr
<table>
<thead>
<tr>
<th>名称</th>
<th>备注</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>model</td>
<td>绑定数据</td>
<td><code>Object</code></td>
<td>-</td>
</tr>
<tr>
<td>rules</td>
<td>表单验证</td>
<td><code>Object</code></td>
<td>-</td>
</tr>
<tr>
<td>label-width</td>
<td>label宽度</td>
<td><code>Number</code></td>
<td>-</td>
</tr>
</tbody>
</table>

## 表单项属性 FormItem-Attr

<table>
<thead>
<tr>
<th>名称</th>
<th>备注</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>prop</td>
<td>表单域 model 字段，在使用 validate 方法的情况下，该属性是必填的</td>
<td><code>String</code></td>
<td>-</td>
</tr>
<tr>
<td>label</td>
<td>标签文本</td>
<td><code>String</code></td>
<td>-</td>
</tr>
<tr>
<td>required</td>
<td>是否是必填项</td>
<td><code>Boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td>rules</td>
<td>表单验证</td>
<td><code>Object</code></td>
<td>-</td>
</tr>
</tbody>
</table>
