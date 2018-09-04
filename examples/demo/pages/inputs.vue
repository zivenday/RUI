/*
 * @Author: zhongw@corp.21cn.com
 * @Date: 2018-06-05 15:49:01
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-08-21 15:36:28
 */
<template>
  <div class="inputs">
    <r-lead>普通输入框：</r-lead>
    <p></p>
    <r-input placeholder="请输入内容"></r-input>
    <p></p>
    <r-lead>带前、后缀图标输入框：</r-lead>
    <p></p>
    <r-input placeholder='请输入内容'>
      <r-icon name="huaban" slot="prefix"></r-icon>
    </r-input>
    <p></p>
    <r-input placeholder='请输入内容'>
      <r-icon name="huaban" slot="suffix"></r-icon>
    </r-input>
    <p></p>
    <r-lead>自动补全：</r-lead>
    <r-auto-complete v-model="address" :valueKey="'address'" :placeholder="'请输入内容'" type="primary" :fetch-suggestions="fetchAction" ></r-auto-complete>
  </div>
</template>
<script>
export default {
  data () {
    return {
      address:'',
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
  methods: {
    fetchAction (queryString, cb) {
      this.suggestions = this.allData.filter(item => (!!queryString ? item.address.includes(queryString) : true))
      cb(this.suggestions)
    }
  }
}
</script>
<style lang="scss" scoped>
.inputs {
  padding: 20px 5px;
}
</style>
