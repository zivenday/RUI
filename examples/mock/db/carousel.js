const Mock = require('mockjs')
const Random = Mock.Random
const l = Random.integer(1, 10)
const use = Random.integer(0, l)
const region = Random.county(true)
module.exports = () => {
  const w = document.documentElement.clientWidth
  const h = document.documentElement.clientWidth * 320 / 375
  let itemList = []
  for (let index = 0; index < l; index++) {
    itemList.push(
      Mock.mock({
        src: Random.image(`${w}x${h}`, Random.color(), `${w}x${h}`)
      })
    )
  }
  let data = {}
  data.itemList = itemList
  data.code = 0
  return data
}