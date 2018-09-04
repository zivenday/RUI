# countBar   计数栏
本页介绍计数栏

## 单独引入
```JavaScript
import { RCarousel } from 'recharger'

Vue.use(RCarousel)
```
## 代码演示
```Html
<r-count-bar v-model="count">
</r-count-bar>
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
<td>value</td>
<td>计数器的值</td>
<td><code>Number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td>min</td>
<td>允许的最小值</td>
<td><code>Number</code></td>
<td><code>1</code></td>
</tr>
<tr>
<td>max</td>
<td>允许的最大值</td>
<td><code>Number</code></td>
<td><code>100</code></td>
</tr>
<tr>
<td>disabled</td>
<td>按钮是否可点</td>
<td><code>Boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td>disabledInput</td>
<td>输入框是否可以输入</td>
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
<td>input</td>
<td>输入事件</td>
<td>输入的值</td>
</tr>
<tr>
<td>change</td>
<td>变更事件</td>
<td>变更的值</td>
</tr>
<tr>
<td>blur</td>
<td>输入框失焦事件</td>
<td>失焦前的值</td>
</tr>
<tr>
<td>plus</td>
<td>点击加号按钮事件</td>
<td>点击后的值</td>
</tr>
<tr>
<td>mins</td>
<td>点击减号按钮事件</td>
<td>点击后的值</td>
</tr>
</tbody>
</table>