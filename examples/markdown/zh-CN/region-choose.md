# RegionChoose 区域选择
本页介绍区域选择

## 单独引入
```JavaScript
import { RegionChoose } from 'recharger'

Vue.use(RegionChoose)
```
## 代码演示
```Html
<template>
  <div>
    <p></p>
    <r-lead>区域选择：</r-lead>
    <p></p>
    <r-input type="primary" v-model="value"></r-input>
    <p></p>
    <r-button type="primary" @click="handleClick">弹出区域选择</r-button>
    <r-region-choose :show.sync="show" @confirm="handleConfirm">
    </r-region-choose>
  </div>
</template>
```
```JavaScript
export default {
  data () {
    return {
      value: '',
      show: false
    }
  },
  methods: {
    handleClick () {
      this.show = true
    },
    handleConfirm (val) {
      this.value = val
    }
  }
}
```

## 属性 Attr
<table>
<thead>
<tr>
<th>名称</th>
<th>备注</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>show</td>
<td>显示与否</td>
<td><code>Boolean</code></td>
<td><code>false</code></td>
</tr>
</tbody>
</table>

## 事件 Evt


<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
<th>返回值</th>
</tr></thead>
<tbody>
<tr>
<td>confirm</td>
<td>确认选择区域</td>
<td>选中的选项</td>
</tr>
</tbody>
</table>