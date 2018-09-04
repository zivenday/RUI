<template>
  <div class="test" style="padding: 10px">

    <r-form :model="dynamicValidateForm" ref="dynamicValidateForm" labr-width="100px" class="demo-dynamic">
      <r-form-item prop="email" label="邮箱" :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
    ]">
        <r-input v-model="dynamicValidateForm.email"></r-input>
      </r-form-item>
      <r-form-item v-for="(domain, index) in dynamicValidateForm.domains" :label="'域名' + index" :key="domain.key" :prop="'domains.' + index + '.value'" :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }">
        <template slot-scope="v">
          <r-input v-model="domain.value"></r-input>
          <r-button @click.prevent="removeDomain(domain)">删除</r-button>
          {{v.validateState}}
        </template>
      </r-form-item>
      <r-form-item>
        <r-button type="primary" @click="submitForm('dynamicValidateForm')">提交</r-button>
        <r-button @click="addDomain">新增域名</r-button>
        <r-button @click="resetForm('dynamicValidateForm')">重置</r-button>
      </r-form-item>
    </r-form>
    <!-- <r-auto-complete :styles='style' :fetch-suggestions='fetchSearch'></r-auto-complete> -->
    <r-button type="primary" size="small" @click="show = !show">按钮</r-button>
    <r-button type="primary" @click="clickHandle">大按钮</r-button>
    <r-button type="plain" size="small" :styles='style1'>
      <r-icon name="yiwen"></r-icon>白底按钮</r-button>
    <r-lead>你好我是指导标题</r-lead>
    <r-cash-bulk-group v-model="bulkInfo" @change="changes">
      <r-cash-bulk :bulkInfo="bulkInfo1"></r-cash-bulk>
      <r-cash-bulk :bulkInfo="bulkInfo2"></r-cash-bulk>
      <r-cash-bulk :bulkInfo="bulkInfo3"></r-cash-bulk>
    </r-cash-bulk-group>
    <r-table :data="tableData" :headers="headTitle" width="60">
    </r-table>
    <!--<r-fade-in-transition>-->
    <!--<div v-show="show">-->
    <r-form :model="form" ref="form" :rules="rules">
      <r-form-item label="名称" prop="name" :defaultErrorTips="false">
        <r-auto-complete :isFocus="isFocus" ref="autoComplete" :styles='style' v-model="form.name" :fetch-suggestions='fetchSearch' @select="handleSelect"></r-auto-complete>
        <!-- <r-input v-model="form.name" ></r-input> -->
      </r-form-item>
    </r-form>
    <!--</div>-->

    <!--</r-fade-in-transition>-->
    <r-input v-model="value1" :text-style="{'text-align':'right'}">
      <i slot="suffix" class="iconfont r-icon-error"></i>
    </r-input>
    <!-- <input v-model="value1"> -->
    <p>{{form.name}}</p>
    <!-- <r-input type="transparent"></r-input> -->
    <!-- <collapse-transition>
      <div v-show="show">
        <div style="background-color: #409EFF;width: 200px;height: 200px"></div>
      </div>
    </collapse-transition> -->
    <r-button type="primary" size="fix" @click="CallClick">
      <r-icon name="bianji"></r-icon>
      <r-icon name="shanchu"></r-icon>弹框</r-button>
    <div style="height: 20px"></div>
    <r-tag type="success">在用</r-tag>
    <div style="height: 20px"></div>
    <!-- <r-input size="large"></r-input> -->
    <r-icon name="error"></r-icon>
    <r-dialog :show.sync="isShow"></r-dialog>
    <r-radio v-model="radio" label="1">备选项</r-radio>
    <r-checkbox v-model="checked">备选项</r-checkbox>
    <r-tabs v-model="activeName" @tab-click="handleClick">
      <r-tab-pane label="全部(50)" name="first">用户管理</r-tab-pane>
      <r-tab-pane label="在用" name="second">配置管理</r-tab-pane>
      <r-tab-pane label="停用" name="third">角色管理</r-tab-pane>
      <r-tab-pane label="其他" name="fourth">定时任务补偿</r-tab-pane>
    </r-tabs>
  </div>
</template>

<script>
// import { MessageBox } from '../../../src/index'
export default {
  name: 'test',
  data () {
    const abc = (rule, value, callback) => {
      console.log('......', value)
      if (value > 1) {
        callback(new Error('!!!!!!!!!!!!!!'))
      } else {
        callback()
      }
    }
    return {
      disabled: true,
      radio: '',
      checked: true,
      value1: 'abcssssssssss',
      activeName: 'second',
      msg: 'Welcome to Your Vue.js App',
      isShow: true,
      dynamicValidateForm: {
        domains: [{
          value: ''
        }],
        email: ''
      },
      msg1: 123457,
      style: {
        width: 312,
        height: '40px',
        fontSize: '16px'
      },
      style1: {
        border: 0,
        background: 'transparent'
      },
      isFocus: false,
      show: true,
      bulkInfo: { duration: '1年', spend: '￥60' },
      bulkInfo1: { duration: '1年', spend: '￥60' },
      bulkInfo2: { duration: '2年', spend: '￥100' },
      bulkInfo3: { duration: '3年', spend: '￥120' },
      tableData: [{ data: 1, msg: 2 }, { data: 1, msg: 2 }, { data: 1, msg: 2 }],
      headTitle: ['aaa', 'bbb'],
      form: {
        name: 9
      },
      rules: {
        name: { required: true, validator: abc, trigger: 'blur' }
      },
      noticeList: ['订购成功后，如需查看订单，请关注【物联易充】微信公众号rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'],
      allData: [
        { 'value': '8986031540252320642', 'address': '长宁区新渔路144号' },
        { 'value': '8986031540252366666', 'address': '上海市长宁区淞虹路661号' },
        { 'value': '8986031540252366666', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113' },
        { 'value': '8986031540252366666', 'address': '天山西路438号' },
        { 'value': '8986031540252366666', 'address': '上海市长宁区金钟路968号1幢18号楼一层商铺18-101' },
        { 'value': '8986031540252366666', 'address': '上海市长宁区金钟路633号' }],
      suggestions: []
    }
  },
  mounted () {

    // console.log('sdfsdfsd', window.iframe)
  },
  methods: {
    CallClick () {
      this.$confirm({ message: '我是中国是的发送到水电费斯蒂芬斯蒂芬是的发送到多多多多多多多多多多多多多多多多多多多多多多多' })
      // this.$loading('查询中...')
      // this.$waiting()
      // this.$notice(this.noticeList)
      // setTimeout(() => {
      //   this.$waiting('end')
      // }, 5000)
    },
    handleClose () {
      this.isShow = false
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        RMessageBox.alert()
      })
    },
    changes (val) {
      // console.log(val)
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
    handleClick (tab, event) {
      this.$refs['form'].validate(valid => {
        // console.log('++++++', valid)
      })
    },
    handleSelect (item) {
    },
    // handleChange (val) {
    //   console.log('<><><><', val, this.value1)
    // },
    clickHandle () {
      // console.log('>>>', this.$refs['autoComplete'])
      // this.disabled = !this.disabled
      // this.isFocus = !this.isFocus
      // this.$alert({ message: '查询失败，请稍后再试', iconClass: 'icon-shibaiicon' })
    },
    fetchSearch (queryString, cb) {
      this.suggestions = this.allData.filter(item => (!!queryString ? item.value.includes(queryString) : true))
      cb(this.suggestions)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test {
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  /* background-image: linear-gradient(
    -180deg,
    rgba(255, 173, 70, 0.21) 0%,
    #ffad46 100%
  ); */
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
