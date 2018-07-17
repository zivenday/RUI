<template>
  <r-bottom-pop :show="current" @close="handleClose" :title="title">
    <div class="r-region-choose">
      <!-- <div class="r-region-choose__title">配送至</div> -->
      <div class="r-region-choose__tab">
        <r-tabs v-model="activeName" @tab-click="handleClick">
          <r-tab-pane v-for="(tabInfo,index) in tabInfoList" :key="index" :label="tabInfo.label" :name="tabInfo.name">
            <div class="r-region-choose__list">
              <li class="r-region-choose__space" v-for="space in tabInfo.spaceList" :key="space.name" :class="{'is-choose':tabInfo.label===space.name}" @click="handleChoose(tabInfo,space)">{{space.name}}</li>
            </div>
          </r-tab-pane>
        </r-tabs>
      </div>
    </div>
  </r-bottom-pop>
</template>
<script>
import provinces from './city/provinces_cn.json'
import cites from './city/cities_cn.json'
import areas from './city/areas_cn.json'
export default {
  name: 'RRegionChoose',
  componentName: 'RRegionChoose',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: [String, Number],
      default: '配送至'
    }
  },
  watch: {
    show (val) {
      this.current = val
    }
  },
  data () {
    return {
      current: false,
      region: [],
      tabInfoList: [{
        label: '请选择',
        name: '1',
        spaceList: []
      }],
      activeName: '1'
    }
  },
  mounted () {
    this.tabInfoList[0].spaceList = provinces
  },
  methods: {
    handleClose () {
      this.$emit('update:show', false)
      this.$emit('close', false)
    },
    handleClick () {
      const length = this.tabInfoList.length
      const start = parseInt(this.activeName)
      this.tabInfoList.splice(start, length - start)
    },
    handleChoose (tab, space) {
      tab.label = space.name
      let newTab = {}
      if (tab.name === '3' || space.code === '71' || space.code === '81' || space.code === '82') {
        this.confirmAction()
      } else {
        newTab = this.prepareTab(tab.name, space.code)
        this.addTab(newTab)
      }
    },

    prepareTab (name, code) {
      let tabInfo = {}
      let next = name === '1' ? cites : areas
      next = next.filter(e => e.parent_code === code)
      if (next.length === 1 && name === '1') {
        next = areas.filter(e => e.parent_code === next[0].code)
        tabInfo.name = '3'
      } else if (name === '2') {
        tabInfo.name = '3'
      } else {
        tabInfo.name = '2'
      }
      tabInfo.label = '请选择'
      tabInfo.spaceList = next
      return tabInfo
    },
    addTab (tab) {
      this.tabInfoList.push(tab)
      this.activeName = tab.name
    },
    confirmAction () {
      this.$emit('confirm', this.tabInfoList.map(e => e.label))
      this.handleClose()
    }
  }
}
</script>
