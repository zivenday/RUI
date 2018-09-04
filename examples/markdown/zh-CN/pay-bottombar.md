# payBottombar 支付底栏
本页介绍支付底栏

## 单独引入
```JavaScript
import { RPayBottombar } from 'recharger'

Vue.use(RPayBottombar)
```
## 代码演示
### 没有购物车
```Html
<r-pay-bottombar :sum="188.9*100" @click="handleClick"></r-pay-bottombar>
```
### 有购物车
```Html
<r-pay-bottombar
 :sum="188.9*100"
 :hasShopCart="true"
 @click="handleClick"
 @clickShopcart="handleShop"></r-pay-bottombar>
```
```JavaScript
handleClick () {
   this.$tips('支付')
},
handleShop () {
   this.$tips('购物车')
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
<td>buttonName</td>
<td>支付按钮文本</td>
<td><code>String</code></td>
<td><code>去支付</code></td>
</tr>
<tr>
<td>textName</td>
<td>实付款文本</td>
<td><code>String</code></td>
<td><code>实付款：</code></td>
</tr>
<tr>
<td>currency</td>
<td>币种</td>
<td><code>String</code></td>
<td><code>￥</code></td>
</tr>
<tr>
<td>sum</td>
<td>额度</td>
<td><code>Number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td>hasShopCart</td>
<td>是否需要购物车按钮</td>
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
<td>click</td>
<td>支付按钮点击事件</td>
<td><code>sum:总额</code></td>
</tr>
<tr>
<td>click-shopcart</td>
<td>购物按钮点击事件</td>
<td><code>-</code></td>
</tr>
</tbody>
</table>