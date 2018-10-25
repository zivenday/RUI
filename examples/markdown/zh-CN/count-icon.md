# Coupon 计数图标
本页介绍计数图标


## 单独引入
```JavaScript
import { RCountIcon } from 'recharger'

Vue.use(RCountIcon)
```
## 代码演示
```Html
<r-count-icon :styles="styles" :count="100"></r-count-icon>

<r-count-icon :styles="styles" :count="13"></r-count-icon>

<r-count-icon :styles="styles" :count="1"></r-count-icon>
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
<td>style</td>
<td>设置样式</td>
<td><code>Object</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td>count</td>
<td>个数</td>
<td><code>Number</code></td>
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
<td>click</td>
<td>点击事件</td>
<td>count</td>
</tr>
</tbody>