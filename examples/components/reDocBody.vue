/*
 * @Author: zhongw@corp.21cn.com
 * @Date: 2018-05-31 15:23:28
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-06-05 17:02:48
 */

<template>
  <div class="re-doc-body" v-if="!isIndex">
    <re-doc-topbar></re-doc-topbar>
    <re-doc-container>
      <re-doc-nav :navConfig="config.nav" :base="base"></re-doc-nav>
      <div class="re-doc-main">
        <div class="re-doc-markdown">
          <slot></slot>
        </div>
        <div class="re-doc-simulator">
          <simulator v-if="simulator" :src="simulator" />
          <simulator v-for="(url, index) in simulators" :key="index" v-show="index === currentSimulator" :src="url" />
        </div>
      </div>
    </re-doc-container>
  </div>
  <reDocIndex v-else></reDocIndex>
</template>

<script>
import reDocTopbar from './reDocTopBar'
import reDocContainer from './reDocContainer'
import reDocIndex from './reDocIndex'
import Simulator from './simulator'
import reDocNav from './Nav.vue'
export default {
  name: 're-doc-body',

  props: {
    config: {
      type: Object,
      require: true
    },
    currentSimulator: [Number, String],
    currentPath: String,
    simulator: String,
    simulators: {
      type: Array,
      default: () => { }
    },
    base: {
      type: String,
      default: ''
    }
  },
  computed: {
    isIndex () { return this.currentPath === '/zh-CN/index' ? true : false }
  },
  watch: {
    currentPath (val) {
      // console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^', val, this.config)
    }
  },
  mounted () {
    // console.log('123123', this.simulators)
  },
  components: {
    'simulator': Simulator,
    're-doc-topbar': reDocTopbar,
    're-doc-container': reDocContainer,
    're-doc-nav': reDocNav,
    reDocIndex
  }
}
</script>
<style lang="scss" scoped>
// @import "../assets/scss/components/reDocNav";
@import "../assets/scss/components/reDocMarkDown";
@import "../assets/scss/components/reDocMain";
@import "../assets/scss/components/reDocSimulator";
@import "../assets/scss/md.scss";
.re-doc-body{
  width: 100%;
  height: 100%;
}
</style>
