<template>
  <div>
    <p></p>
    <r-lead>普通箭头导航栏：</r-lead>
    <p></p>
    <r-page-navbar arrow="right" @click="handleClick1">
      <div>这是一个右方向的导航栏</div>
    </r-page-navbar>
    <p></p>
    <r-page-navbar arrow="left" @click="handleClick2">
      <div>这是一个左方向的导航栏</div>
    </r-page-navbar>
    <p></p>
    <r-lead>自定义内容箭头导航栏：</r-lead>
    <p></p>
    <r-page-navbar arrow="right" @click="handleClick">
      <r-icon class="user-icon" name="yonghuming"></r-icon>
      <div class="user">
        <div class="user-name">User</div>
        <div class="user-tip">进入查看用户信息</div>
      </div>
    </r-page-navbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      pageNavbar1: {
        addr: ''
      }
    }
  },
  mounted () {
    this.pageNavbar({}).then(res => {
      // console.log('????', res)
      if (!res.data.code) {
        // console.log('>>>>>>>>', res.data.pageNavbar)
        this.pageNavbar1 = res.data.addrInfo
      }
    })
  },
  methods: {
    handleClick () {
      this.$tips('查看用户信息')
    },
    handleClick1 () {
      this.$tips('左方向')
    },
    handleClick2 () {
      this.$tips('右方向')
    },
    async pageNavbar () {
      const res = this.$axios.post('/mock/pageNavbar')
      return res
    }
  }
}
</script>
<style lang="scss" >
.user {
  display: inline-block;
  padding: 0 10px;
  box-sizing: border-box;
  &-name {
    font-size: 20px;
    font-weight: 400;
  }
  &-tip {
    font-size: 14px;
    padding: 5px 0;
    color: #999;
  }
}
.user-icon {
  color: #999;
  font-size: 25px;
}
</style>
