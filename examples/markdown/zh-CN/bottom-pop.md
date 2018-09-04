# BottomPop 底部弹框
本页介绍底部弹框
## 单独引入
```JavaScript
import { RBottomPop } from 'recharger'

Vue.use(RBottomPop)
```
## 代码演示
```Html
<r-bottom-pop :show.sync="show" :title="'弹框标题'">

</r-bottom-pop>
```

```JavaScript
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleClick () {
      this.show = true
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
<td>显示与隐藏弹框</td>
<td><code>Boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td>title</td>
<td>弹框标题</td>
<td><code>String</code></td>
<td><code>-</code></td>
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