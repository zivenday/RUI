# Dialog 对话框
本页介绍对话框

## 单独引入
```JavaScript
import { RDialog } from 'recharger'

Vue.use(RDialog)
```
## 代码演示
```Html
<template>
  <div>
    <p></p>
    <r-lead>对话框：</r-lead>
    <p></p>
    <r-dialog :show.sync="show" :model="model1">
      <div class="content">
        <div>
          <r-icon name="yonghuming" class="use"></r-icon>
        </div>
        <div>这是内容</div>
      </div>
    </r-dialog>
    <r-dialog :show.sync="show1" :model="model2">
      <div class="content">
        <div>
          <r-icon name="yonghuming" class="use"></r-icon>
        </div>
        <div>这是内容</div>
      </div>
    </r-dialog>
    <r-button type="primary" @click="handleClick">显示没有Model对话框</r-button>
    <p></p>
    <r-button type="primary" @click="handleClick1">显示有Model对话框</r-button>
  </div>
</template>
```
```JavaScript
export default {
  data () {
    return {
      show: false,
      show1: false,
      model1: false,
      model2: true
    }
  },
  methods: {
    handleClick () {
      this.show = true
    },
    handleClick1 () {
      this.show1 = true
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
<tr>
<td>model</td>
<td>是否有遮罩</td>
<td><code>Boolean</code></td>
<td><code>true</code></td>
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
<td>close</td>
<td>关闭事件</td>
<td><code>Evt</code></td>
</tr>
</tbody>
</table>