const Mock = require('mockjs')
const Random = Mock.Random
const l = Random.integer(1, 10)
const use = Random.integer(0, l)
const region = Random.county(true)
let data={}
module.exports = () => {
  addrInfo = Mock.mock({
    name: Random.cname(),
    tel: Random.natural(),
    addr: region + '###' + Random.ctitle(5, 50)
  })
  data.addrInfo = addrInfo
  data.code = 0
  return data
}