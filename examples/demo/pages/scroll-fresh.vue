<template>
  <r-scroll-fresh :on-refresh="onRefresh" :no-more="noMore" :on-infinite="onInfinite" :dataList="scrollData">
    <div :class="['mail-card','mail-card__'+(index%2?'left':'right')]" v-for="(item, index) in mailList" :key="index" @click="handleCardClick(item)">
      <div>
        <div><img v-lazy="item.src" :alt="item.name" style="pointer-events:none"></div>
        <div class="mail-card__name">{{item.name}}</div>
        <div>
          <span class="mail-card__currency">￥</span>
          <span class="mail-card__price">{{item.price}}</span>
        </div>
      </div>
    </div>
    <div slot="load-more"></div>
  </r-scroll-fresh>
</template>
<script>
export default {
  data () {
    return {
      page: 1, // 当前页
      num: 2, // 一页显示多少条
      pageStart: 0, // 开始页数
      pageEnd: 0, // 结束页数
      listdata: [], // 下拉更新数据存放数组
      downdata: [], // 上拉更多的数据存放数组
      scrollData: {
        noFlag: false // 暂无更多数据显示
      },
      noPostData: false, // 是否数据库还有数据,默认是还有,false
      activeName: '0',
      mailList: [],
      isNullOrder: true,
      proType: '',
      noMore: false
    }
  },
  computed: {
    // ...mapGetters(['openId'])
  },
  mounted () {
    this.proType = this.$route.query.proType
    // this.onRefresh()
  },
  methods: {
    async getMailList (type, page, num) {
      const res = this.$axios.post('/mock/getMailList')
      return res
    },
    onRefresh (done) {
      this.$loading('查询中...')
      this.getMailList(this.proType, this.page, this.num).then(res => {
        this.$loading(false)
        // console.log('12121', res)
        if (!res.data.code) {
          this.mailList = res.data.mailList
          this.noMore = this.mailList.length >= this.num ? false : true
        } else {
          this.$alert(this.$fault(res.data.code))
          this.mailList = []
          this.noMore = true
        }
        done ? done() : undefined
      })
    },
    onInfinite (done) {
      this.$loading('查询中...')
      this.getMailList(this.proType, this.page, this.num).then(res => {
        this.$loading(false)
        if (!res.code) {
          this.mailList = this.mailList.concat(res.data.mailList)
          this.noMore = this.mailList.length >= 10 ? false : true
          // console.log('????', this.mailList)
        } else {
          this.$alert(this.$fault(res.code))
        }
        done()
      })
    },
    handleClick () {

    },
    handleCardClick (item) {
      // const isBatch = item.iotCardList.length > 1 ? true : false
      // this.$router.push({ name: 'mailDetail', query: { mailId: item.mailId, isBatch: isBatch } })
    }
  }
}
</script>
