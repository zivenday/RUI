const Mock = require('mockjs')
const Random = Mock.Random

module.exports = () => {
  const w = document.documentElement.clientWidth
  const h = 320
  const l = Random.integer(1, 10)
  let packageList = []
  // List = [{
  //   src: Random.image(`${w}x${h}`, Random.color(), `${w}x${h}`)
  // }]
  for (let index = 0; index < l; index++) {
    packageList.push(
      Mock.mock({
        src: Random.image(`${w}x${h}`, Random.color(), `${w}x${h}`),
        name: Random.ctitle(5, 6),
        price: Random.integer(100, 1000)
      })
    )
  }
  let data={}
  data.packageList = packageList
  data.code=0
  return data
}