const Mock = require('mockjs')
const Random = Mock.Random

module.exports = () => {
  const w = document.documentElement.clientWidth
  const h = 320

  // List = [{
  //   src: Random.image(`${w}x${h}`, Random.color(), `${w}x${h}`)
  // }]
  var data = Mock.mock({
    'showPicList|3': [{
      "src|+1": [Random.image(`${w}x${h}`, Random.color(), `${w}x${h}`), Random.image(`${w}x${h}`, Random.color(), `${w}x${h}`), Random.image(`${w}x${h}`, Random.color(), `${w}x${h}`)]
    }],
    'detailPicList|5-10': [{
      "src|+1": [Random.image(`${w}x${h}`, Random.color(), `${w}x${h}`), Random.image(`${w}x${h}`, Random.color(), `${w}x${h}`), Random.image(`${w}x${h}`, Random.color(), `${w}x${h}`)]
    }]
  })

  data.code = 0
  data.name=Random.ctitle( 5, 13 )
  data.price=Random.integer(100,1000)
  return data
}