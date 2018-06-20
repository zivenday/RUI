<template>
  <div class="re-doc-topbar">
    <div>
      <div>
        <img src="../assets/image/152809660385510.png" alt="recharger-logo">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 're-doc-topbar'
}
</script>

<style lang="scss" type="text/scss" scoped>
@import "../assets/scss/variable";
.re-doc-topbar {
  width: 100%;
  height: $re-doc-header-top-height;
  background-color: rgb(239, 239, 239);
  & > div {
    box-sizing: border-box;
  }
  & > div > div {
    padding: 5px 0;
  }
  & > div > div > img {
    display: block;
    height: 50px;
  }
}
// @media screen and (min-width: 1140px) {
//   .re-doc-topbar > div {
//     width: 1140px;
//     padding-left: calc(50% - 600px);
//     padding-right: calc(50% - 600px);
//   }
// }
// @media screen and (max-width: 1140px) {
//   .re-doc-topbar > div {
//     width: 1140px;
//     padding: 0;
//   }
// }
</style>
