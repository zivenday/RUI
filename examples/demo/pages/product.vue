<template>
  <div >
    <r-product :show-pic-list="showPicList" :detail-pic-list="detailPicList" :product="product">

    </r-product>
  </div>
</template>
<script>
export default {
  data () {
    return {
      product: {
        name: 'XXXXXXXXXXXX对讲机',
        price: '300'
      },
      showPicList: [
        { src: 'https://img.yzcdn.cn/public_files/2017/09/05/bac1903e863834ace25773f3554b6890.jpg' },
        { src: 'https://img.yzcdn.cn/public_files/2017/09/05/138c32d4384b5e4a78dc4e1ba58e6a80.jpg' },
        { src: 'https://img.yzcdn.cn/public_files/2017/09/05/bac1903e863834ace25773f3554b6890.jpg' }
      ],
      detailPicList: [
        { src: 'https://img.yzcdn.cn/public_files/2017/09/05/bac1903e863834ace25773f3554b6890.jpg' },
        { src: 'https://img.yzcdn.cn/public_files/2017/09/05/138c32d4384b5e4a78dc4e1ba58e6a80.jpg' },
        { src: 'https://img.yzcdn.cn/public_files/2017/09/05/bac1903e863834ace25773f3554b6890.jpg' }
      ]
    }
  }
}
</script>
