<template>
  <div>
    <p></p>
    <r-lead>type类型按钮：</r-lead>
    <p></p>
    <div>
      <span class="title">primary</span>
      <span class="title">info</span>
      <span class="title">success</span>
      <span class="title">danger</span>
    </div>
    <r-button type="primary">按钮</r-button>
    <r-button type="info">按钮</r-button>
    <r-button type="success">按钮</r-button>
    <r-button type="danger">按钮</r-button>
    <p></p>
    <div>
      <span class="title">plain</span>
    </div>
    <r-button size="plain">按钮</r-button>
    <p></p>
    <div>
      <span class="title fix">fix</span>
    </div>
    <p></p>
    <r-lead>不可点击（disabled）：</r-lead>
    <p></p>
    <div>
      <span class="title">primary</span>
      <span class="title">info</span>
      <span class="title">success</span>
      <span class="title">danger</span>
    </div>
    <r-button type="primary" disabled>按钮</r-button>
    <r-button type="info" disabled>按钮</r-button>
    <r-button type="success" disabled>按钮</r-button>
    <r-button type="danger" disabled>按钮</r-button>
    <p></p>
    <r-lead>大小（size）</r-lead>
    <p></p>
    <r-button type="primary" size="mini">按钮</r-button>
    <p></p>
    <r-button type="primary" size="small">按钮</r-button>
    <p></p>
    <r-button type="primary" size="medium">按钮</r-button>
    <p></p>
    <r-button size="fix" type="primary">按钮</r-button>
    <p></p>
    <r-lead>带图标：</r-lead>
    <p></p>
    <r-button type="primary"><r-icon name="user"></r-icon>按钮</r-button>
    <r-button type="success"><r-icon name="xuanzhong"></r-icon>按钮</r-button>
    <r-button type="danger"><r-icon name="plus"></r-icon>按钮</r-button>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <div></div>
    <div></div>
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
.title {
  display: inline-block;
  font-size: 12px;
  padding: 5px 10px 5px 0;
  text-align: left;
  width: 63px;
}
.fix {
  width: 335px;
}
</style>
