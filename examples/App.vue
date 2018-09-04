<template>
  <div id="app">
    <re-doc-body :simulators="simulators" :currentSimulator="currentSimulator" :currentPath="currentPath" :config="config" base="/zh-CN">
      <router-view/>
    </re-doc-body>
  </div>
</template>

<script>
import reDocBody from './components/reDocBody.vue'
import config from './config/markdown.nav.config.js'
export default {
  name: 'App',
  data () {
    return {
      simulators: [(process.env.BUILD_ENV === 'prod' ? '/RUI/dist' : '') + '/examples.html#/zh-CN/index'],
      config: config['zh-CN']
    }
  },
  components: { reDocBody },
  computed: {
    currentSimulator () {
      const { name } = this.$route
      // console.log('currentSimulator', name && name.indexOf('demo') !== -1 ? 1 : 0)
      // console.log('currentSimulator', name, this.$route)
      return name && name.indexOf('demo') !== -1 ? 1 : 0
    },
    currentPath () {
      return this.$route.path
    }
  }
  // created () {
  //   console.log('!!!!', this.config)
  // }
}
</script>

<style lang="scss" type="text/scss">
@import "assets/scss/normalize";
@import "assets/scss/base";
@import "./assets/scss/md";

#app {
  height: 100%;
  overflow: hidden;
    font-family: PingFangSC-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
}
</style>
