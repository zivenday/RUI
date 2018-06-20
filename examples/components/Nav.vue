/*
 * @Author: zhongw@corp.21cn.com
 * @Date: 2018-05-31 15:25:13
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-06-04 17:23:56
 */
<template>
  <div class="re-doc-nav" :style="style">
    <ul>
      <li class="re-doc-nav__item" v-for="(item, index) in navConfig" :key="index">
        <re-doc-nav-link :item="item" :base="base" />
        <ul v-if="item.children">
          <li class="nav-item" v-for="(navItem, index) in item.children" :key="index">
            <re-doc-nav-link :item="navItem" :base="base" />
          </li>
        </ul>
        <div v-if="item.groups" v-for="(group, index) in item.groups" :key="index">
          <div class="re-doc-nav__group-title">{{ group.groupName }}</div>
          <ul>
            <li :key="index" class="re-doc-nav__subitem" v-for="(navItem, index) in group.list" v-if="!navItem.disabled">
              <re-doc-nav-link :item="navItem" :base="base" />
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  name: 're-doc-nav',

  components: {
    [NavLink.name]: NavLink
  },

  props: {
    navConfig: Array,
    base: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      top: 60,
      bottom: 0
    }
  },

  computed: {
    style () {
      return {
        top: this.top + 'px',
        bottom: this.bottom + 'px'
      }
    }
  },

  created () {
    window.addEventListener('scroll', this.onScroll)
    this.onScroll()
  },

  methods: {
    onScroll () {
      const { pageYOffset: offset } = window
      this.top = Math.max(0, 60 - offset)
    }
  }
}
</script>

<style lang="scss" type="text/scss">
@import "../assets/scss/variable";
@import "../assets/scss/components/reDocNav";
</style>
