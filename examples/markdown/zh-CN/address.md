# Address 地址选择
本页介绍地址选择栏

## 单独引入
```JavaScript
import { RAddressGroup, RAddress } from 'recharger'

Vue.use(RAddressGroup)
Vue.use(RAddress)
```
## 代码演示
```Html
<template>
  <div class="re-address">
    <p></p>
    <r-lead>地址列表：</r-lead>
    <p></p>
    <r-address-group v-model="infos">
      <r-address :info="info" @edit="handleEdit" @del="handleDel">
      </r-address>
      <r-address :info="info1" @edit="handleEdit" @del="handleDel">
      </r-address>
      <r-address :info="info2" @edit="handleEdit" @del="handleDel">
      </r-address>
    </r-address-group>
  </div>
</template>
```
```JavaScript
export default {
  data () {
    return {
      infos: {
        name: '张三',
        tel: '18000000099',
        addr: 'addressaddressaddress'
      },
      info: {
        name: '张三',
        tel: '18000000099',
        addr: 'addressaddressaddress'
      },
      info1: {
        name: '李四',
        tel: '18000000000',
        addr: 'addressaddressaddressaddressaddressaddressaddressaddress'
      },
      info2: {
        name: '王五',
        tel: '18000000001',
        addr: 'addressaddressaddressaddressaddressaddressaddressaddressaddressaddressaddressaddressaddressaddressaddressaddress'
      }
    }
  },
  methods: {
    handleEdit () {
      this.$tips('编辑')
    },
    handleDel () {
      this.$tips('删除')
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
<td>info</td>
<td>地址信息</td>
<td><code>Object</code></td>
<td>-</td>
</tr>
<tr>
<td>nameKey</td>
<td>地址信息中名称关键词</td>
<td><code>String</code></td>
<td><code>name</code></td>
</tr>
<tr>
<td>telKey</td>
<td>地址信息中联系电话关键词</td>
<td><code>String</code></td>
<td><code>tel</code></td>
</tr>
<tr>
<td>addrKey</td>
<td>地址信息中地址关键词</td>
<td><code>String</code></td>
<td><code>addr</code></td>
</tr>
</tbody>


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
<td>change</td>
<td>地址选中改变时</td>
<td>选中的值</td>
</tr>
<tr>
<td>edit</td>
<td>编辑按钮点击时</td>
<td><code>Evt</code></td>
</tr>
<tr>
<td>del</td>
<td>删除按钮点击时</td>
<td><code>Evt</code></td>
</tr>
</tbody>
</table>