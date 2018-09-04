const Mock = require('mockjs')
const Random = Mock.Random

module.exports = () => {
  const w = document.documentElement.clientWidth
  const h = 320
  const l = 2
  let skuInfoList = []
  List = [{
    src: Random.image(`${w}x${h}`, Random.color(), `${w}x${h}`)
  }]
  for (let index = 0; index < 1; index++) {
    skuInfoList.push(
      Mock.mock({
        skuKey:Random.integer(0,10)+':'+Random.integer(0,10),
        count:Random.integer(0, 6),
        discount:Random.float(0,1),
        picAddr: Random.image(`${w}x${h}`, Random.color(), `${w}x${h}`),
        name: Random.ctitle(5, 6),
        price: Random.integer(100, 1000)
      })
    )
  }
  let data={}
  data.skuInfoList = skuInfoList
  data.code=0
  return data
}