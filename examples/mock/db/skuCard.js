const Mock = require('mockjs')
const Random = Mock.Random
module.exports = () => {
  let data = {}
  const w = document.documentElement.clientWidth
  const h = 375
  const l = Random.integer(1, 10)

  const skuCard = Mock.mock({
    title: Random.ctitle(20, 30),
    name: Random.ctitle(5, 6),
    price: Random.integer(100, 1000),
    src: Random.image(`${w}x${h}`, Random.color(), `${w}x${h}`),
  })
  data.skuCard = skuCard
  data.code = 0
  return data
}