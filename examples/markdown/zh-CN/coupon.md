# Coupon 优惠券
本页介绍优惠券
## 单独引入
```JavaScript
import { RCoupon } from 'recharger'

Vue.use(RCoupon)
```
## 代码演示

```Html
<r-coupon :limit="'满5减去10'" :validity="'有效期 2018.09.17-2018.10.09'"></r-coupon>
<r-coupon :limit="'满5减去10'" :validity="'有效期 2018.09.17-2018.10.09'" :active="false"></r-coupon>
```

## 表单属性 Attr
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
<td>limit</td>
<td>限制信息显示</td>
<td><code>String</code></td>
<td>-</td>
</tr>
<tr>
<td>validity</td>
<td>有效期信息显示</td>
<td><code>String</code></td>
<td>-</td>
</tr>
<tr>
<td>active</td>
<td>是否是有效</td>
<td><code>boolean</code></td>
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
<td>click</td>
<td>点击领取事件</td>
<td>点击的优惠券信息</td>
</tr>
</tbody>
</table>