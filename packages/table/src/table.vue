<template>
  <div class="r-table" :class="[border?'r-table--'+'border':'']" :style="{ width: width ? width  : '' , height:height?height :'' }">
    <table class="r-table__inner" :style="{ width: width ? width  : '' , height:height?height :'' }">
      <thead v-if="!!headers" class="r-table__thead">
        <tr>
          <td v-for="(val ,index)  in headers" :key="index">
            <div>{{val}}</div>
          </td>
        </tr>
      </thead>
      <tbody class="r-table__tbody">
        <tr v-for="(object ,index) in data" :key="index">
          <td v-for="(cell ,index)  in object" :key="index">
            <div>{{cell}}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'RTable',
  props: ['data', 'headers', 'width', 'height', 'border'],
  data () {
    return {}
  },
  mounted () {
    // console.log(this)
  },
  methods: {}
}
</script>
