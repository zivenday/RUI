# SkuCard 商品套餐卡片
本页介绍商品套餐卡片
## 单独引入
```JavaScript
import { RSKuCard } from 'recharger'

Vue.use(RSKuCard)
```
## 代码演示
```Html
<r-sku-card :title="title" :name="name" :src="src">
</r-sku-card>
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
<td>title</td>
<td>卡标题</td>
<td><code>String</code></td>
<td>卡标题</td>
</tr>
<tr>
<td>src</td>
<td>图片路径</td>
<td><code>String</code></td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>选中组合的名称</td>
<td><code>String</code></td>
<td>套餐名</td>
</tr>
<tr>
<td>count</td>
<td>购买的数量(必须大于0)</td>
<td><code>Number</code></td>
<td><code>1</code></td>
</tr>
<tr>
<td>price</td>
<td>购买的价格(必须大于0)</td>
<td><code>Number</code></td>
<td><code>100</code></td>
</tr>
</tbody>