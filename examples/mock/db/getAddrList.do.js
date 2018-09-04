const Mock = require('mockjs')
const Random = Mock.Random
const l = Random.integer(1, 10)
const use = Random.integer(0, l)
const region = Random.county(true)
module.exports = () => {
  let addrList = []
  for (let index = 0; index < l; index++) {
    addrList.push(
      Mock.mock({
        name: Random.cname(),
        tel: Random.natural(),
        addr: region + '###' + Random.ctitle(5, 50),
        inUse: use === index ? 1 : 0
      })
    )
  }
  let data = {}
  data.addrList = addrList
  data.code = 0
  return data
}