# Carousel 轮播图
本页介绍轮播图的使用

## 单独引入
```JavaScript
import { RCarousel } from 'recharger'

Vue.use(RCarousel)
```
## 代码演示
```Html
<r-carousel>
  <r-carousel-item v-for="(item,index) in itemList" :key="index">
    <img :src="item.src">
  </r-carousel-item>
</r-carousel>
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
<td>height</td>
<td>轮播图高度</td>
<td><code>String</code><code>Number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td>duration</td>
<td>轮播图切换时间（单位：ms）</td>
<td><code>Number</code></td>
<td><code>500</code></td>
</tr>
<tr>
<td>delay</td>
<td>轮播图停留时间（单位：s）</td>
<td><code>Number</code></td>
<td><code>2</code></td>
</tr>
<tr>
<td>autoPlay</td>
<td>是否自动播放</td>
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
<td>change</td>
<td>轮播图切换事件</td>
<td><code>index:切换图片在图片列表中的排序指数</code></td>
</tr>
</tbody>
</table>