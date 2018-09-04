/*
 * @Author: zhongw@corp.21cn.com
 * @Date: 2018-06-28 17:40:52
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-08-22 00:24:35
 */
<template>
  <div>
    <p></p>
    <r-lead>使用通知：</r-lead>
    <p></p>
    <r-button type="primary" @click="handleClick">点击显示通知顶栏</r-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      noticeList: ['第一条通知', '第二条通知', '第三条通知，如果通知大于宽度将轮播的形式展示。。。。。。'],
      doc: undefined
    }
  },
  // mounted () {
  //   this.doc = document.getElementsByClassName('r-notice')
  //   this.doc.length === 1 ? this.doc[0].style.display = 'block' : undefined
  // },
  // beforeDestroy () {
  //   this.doc.length === 1 ? document.getElementsByClassName('r-notice')[0].style.display = 'none' : undefined
  // },
  methods: {
    handleClick () {
      this.$notice({ noticeList: this.noticeList, scroll: 50 })
    }
  }
}
</script>
