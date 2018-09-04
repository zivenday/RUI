const Mock = require('mockjs')
const Random = Mock.Random
module.exports = () => {
  const w = document.documentElement.clientWidth
  const h = 320
  const l = Random.integer(1, 10)
  orderInfo = Mock.mock({
    id:Random.id(),
    time: Random.date('yyyy-mm-dd')+' '+Random.time(),
    sku: {
      src: Random.image(`${w}x${h}`, Random.color(), `${w}x${h}`),
      name: Random.ctitle(5, 6),
      price: Random.integer(100, 1000)
    },
    count:Random.integer(1,100),
    status:Random.integer(0,1),
    wId:Random.id()
  })
  let data = {}
  data.orderInfo = orderInfo
  data.code = 0
  return data
}