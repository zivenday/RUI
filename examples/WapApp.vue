<template>
  <div class="mobile">
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    title () {
      const { name } = this.$route.meta
      return name ? name.replace(/-/g, '') : ''
    }
  },
  watch: {
    $route (to, from) {
      to.name !== from.name && from.name !== null ? document.location.reload() : undefined
    }
  },
  methods: {
    onBack () {
      history.back()
    }
  }
}
</script>

<style>
body {
  color: #333;
  line-height: 1;
  background-color: transparent;
  font-family: PingFangSC-Regular;
  -webkit-font-smoothing: antialiased;
  background: #f1f1f1;
}

.mobile {
  width: 100%;
  height: 100%;
  padding: 10px 10px;
  box-sizing: border-box;
}
.demo{
  padding-bottom: 30px;
}
/* .van-doc-nav-bar {
  .van-nav-bar__title {
    font-size: 15px;
    text-transform: capitalize;
  }
}

.van-doc-demo-section {
  margin-top: -46px;
  padding-top: 46px;
} */
</style>
