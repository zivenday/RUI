# PageNavbar 箭头导航栏
本页介绍箭头导航栏
## 单独引入
```JavaScript
import { RPageNavbar } from 'recharger'

Vue.use(RPageNavbar)
```
## 代码演示
### 普遍箭头导航栏
```Html
<r-page-navbar arrow="right">
  <div>这是一个右方向的导航栏</div>
</r-page-navbar>
```
```Html
<r-page-navbar arrow="left">
  <div>这是一个左方向的导航栏</div>
</r-page-navbar>
```
### 自定义箭头导航栏
```Html
<r-page-navbar arrow="right" @click="handleClick">
  <r-icon class="user-icon" name="yonghuming"></r-icon>
  <div class="user">
    <div class="user-name">User</div>
    <div class="user-tip">进入查看用户信息</div>
  </div>
</r-page-navbar>
```
## 属性 - Attr
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
<td>
导航栏高度
<code>100</code> 
<code>100px</code> 
<code>100vw</code>
</td>
<td>
<code>number</code>
<code>String</code>
</td>
<td><code>20px</code></td>
</tr>
<tr>
<td>awidth</td>
<td>
箭头图标宽度
<code>100</code> 
<code>100px</code> 
<code>100vw</code>
</td>
<td>
<code>number</code>
</td>
<td><code>6.5px</code></td>
</tr>
<tr>
<td>aheight</td>
<td>
箭头图标高度
<code>100</code> 
<code>100px</code> 
<code>100vw</code>
</td>
<td>
<code>number</code>
</td>
<td><code>11.5px</code></td>
</tr>
<tr>
<td>arrow</td>
<td>
导航方向
<code>left</code> 
<code>right</code> 
</td>
<td>
<code>String</code>
</td>
<td><code>left</code></td>
</tr>
</tbody>
</table>

## 事件 - Evt
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
<td>点击导航栏事件</td>
<td><code>evt</code></td>
</tr>
</tbody>
</table>