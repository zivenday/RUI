# Button 按钮
本页介绍按钮
## 单独引入
```JavaScript
import { RButton } from 'recharger'

Vue.use(RButton)
```
## 代码演示

### 类型

```Html
<r-button type="primary">按钮</r-button>

<r-button type="info">按钮</r-button>

<r-button type="success">按钮</r-button>

<r-button type="danger">按钮</r-button>

<r-button type="primary" disabled>按钮</r-button>
 ```
 ### 大小

 ```Html
<r-button type="primary" size="mini">按钮</r-button>

<r-button type="primary" size="small">按钮</r-button>

<r-button type="primary" size="medium">按钮</r-button>

<r-button size="fix" type="primary">按钮</r-button>
 ```

 ### 带图标

```Html
<r-button type="primary"><r-icon name="user"></r-icon>按钮</r-button>

<r-button type="success"><r-icon name="xuanzhong"></r-icon>按钮</r-button>

<r-button type="danger"><r-icon name="plus"></r-icon>按钮</r-button>
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
<td>type</td>
<td>可设置为类型, 如 <code>primary</code> <code>info</code><code>success</code><code>danger</code></td>
<td><code>String</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td>size</td>
<td>可设置为类型, 如 <code>mini</code> <code>small</code><code>medium</code><code>fix</code></td>
<td><code>String</code></td>
<td><code>-</code></td>
</tr>
</tbody>
</table>

## 事件 Evt

Input 支持默认的focus、 input、change、blur事件

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
<td>点击Evt</td>
</tr>
</tbody>
</table>