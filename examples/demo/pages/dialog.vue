<template>
  <div>
    <p></p>
    <r-lead>对话框：</r-lead>
    <p></p>
    <r-dialog :show.sync="show" :model="model1">
      <div class="content">
        <div>
          <r-icon name="yonghuming" class="use"></r-icon>
        </div>
        <div>这是内容</div>
      </div>
    </r-dialog>
    <r-dialog :show.sync="show1" :model="model2">
      <div class="content">
        <div>
          <r-icon name="yonghuming" class="use"></r-icon>
        </div>
        <div>这是内容</div>
      </div>
    </r-dialog>
    <r-button type="primary" @click="handleClick">显示没有Model对话框</r-button>
    <p></p>
    <r-button type="primary" @click="handleClick1">显示有Model对话框</r-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      show1: false,
      model1: false,
      model2: true
    }
  },
  methods: {
    handleClick () {
      this.show = true
    },
    handleClick1 () {
      this.show1 = true
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .use {
    font-size: 40px;
    color: #999;
    padding: 10px;
  }
}
</style>

