/*
 * @Author: zhongw@corp.21cn.com
 * @Date: 2018-06-05 15:49:01
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-06-05 22:14:03
 */
<template>
  <div class="inputs">
    <span> 普通输入框:</span>
    <r-input placeholder="请输入内容"></r-input>
    <span> 带前、后缀图标输入框</span>
    <r-input placeholder='请输入内容'>
      <r-icon name="huaban" slot="prefix"></r-icon>
    </r-input>
        <r-input placeholder='请输入内容'>
      <r-icon name="huaban" slot="suffix"></r-icon>
    </r-input>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.inputs {
  padding: 20px 5px;
}
</style>
