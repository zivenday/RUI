<template>
  <div>
    <p></p>
    <r-lead>轻提示：</r-lead>
    <p></p>
    <r-button type="primary" @click="handleClick1">点击弹出轻提示</r-button>
    <p></p>
    <r-button type="primary" @click="handleClick5">options配置</r-button>
    <p></p>
    <r-lead>信息提示：</r-lead>
    <p></p>
    <r-button type="primary" @click="handleClick2">点击弹出警告信息提示</r-button>
    <p></p>
    <r-button type="primary" @click="handleClick3">点击弹出加载信息提示</r-button>
    <p></p>
    <r-lead>环状加载中：</r-lead>
    <p></p>
    <r-button type="primary" @click="handleClick4">点击弹出环状加载</r-button>
    <p></p>
    <r-lead>确认弹框：</r-lead>
    <p></p>
    <r-button type="primary" @click="handleClick6">点击弹出确认弹框</r-button>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {
    handleClick1 () {
      this.$tips('这是一个轻提示')
    },
    handleClick5 () {
      this.$tips({
        message: '提示信息'
      })
    },
    handleClick2 () {
      this.$alert('这是一个警告')
    },
    handleClick3 () {
      this.$loading('加载中...')
      setTimeout(() => {
        this.$loading(false)
      }, 2000)
    },
    handleClick4 () {
      this.$waiting()
      setTimeout(() => {
        this.$waiting(false)
      }, 2000)
    },
    handleClick6 () {
      this.$confirm({
        message: '这是一个确认信息'
      })
    }
  }
}
</script>
