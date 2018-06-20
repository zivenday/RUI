<template>
  <div class="r-demo">
    <div class="r-demo--logo">
      <img src="../../assets/image/15280966726844.png" alt="recharger-ui">
    </div>
    <div class="r-demo--nav">
      <div v-for="(item,index) in docConfig['zh-CN']['nav'][1].groups" :key="index">
        <div @click="show[index]=!show[index]">
          {{item.groupName}}
        </div>
        <ul v-show="show[index]">
          <router-link v-for="(elem,index) in item.list" :to="base+elem.path" :key="index">
            <li>{{elem.title}}</li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import docConfig from '../../config/markdown.nav.config'
export default {
  data () {
    return {
      base: '/zh-CN',
      docConfig: docConfig,
      show: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false
      } // 当前的item
    }
  },
  created () {
    docConfig['zh-CN']['nav'][1].groups.forEach(e => { e.isShow = false })
    console.log('??????', docConfig['zh-CN']['nav'][1].groups)
  }
}
</script>
<style lang="scss" scoped>
.r-demo {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &--logo {
    display: block;
    width: 100%;
    & > img {
      width: 100%;
    }
  }
  &--nav {
    width: 100%;
    text-align: center;
    & > div > div {
      display: block;
      width: 300px;
      line-height: 2;
      margin: 10px auto;
      cursor: pointer;
      background-color: #fb8800;
      color: #fff;
    }
  }
}
</style>
