<template>
  <div>
    <p></p>
    <r-lead>icon列表：</r-lead>
    <p></p>
    <div>
      <div class="item" v-for="(item) in itemList" :key="item" >
        <r-icon :name="item" :styles="style"></r-icon>
        <div>{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      itemList: [
        'w-plus', 'bianji', 'alertwarn', 'shibaiicon', 'jiantou1',
        'correct', 'xuanzhong1', 'cuowu1', 'weixuanzhong1', 'error',
        'success', 'yonghuming', 'iconfkzt', 'cuowuguanbi2', 'xuanzhong',
        'plus', 'cuowu', 'shanchu', 'dagou', 'jiazai',
        'yiwen', 'password2', 'jiantou', 'shijian', 'ziyuan', 'yonghuming1', 'w-mins', 'tianjia',
        'mins', 'dizhi', 'huaban', 'zhuangtai', 'card',
        'logistics', 'list', 'trucks', 'shop', 'finish',
        'user', 'thin-close', 'home', 'package', 'gross-close',
        'shopping-cart'
      ],
      style: {
        fontSize: '30px'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  display: block;
  float: left;
  width: 33.3333333333%;
  padding-bottom: 33.3333333333%;
  overflow: hidden;
  text-align: center;
  position: relative;
  .iconfont {
    // position: absolute;
  }
  div {
    position: absolute;
    padding-top: 10px;
    box-sizing: border-box;
    // margin-top: 24%;
    // margin-left: -20%;
    width: 100%;
    text-align: center;
  }
}
</style>
