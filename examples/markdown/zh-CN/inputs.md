
# Input 输入框
本页介绍输入框组件的运用

## 单独引入
```JavaScript
import { Input } from 'recharger'

Vue.use(Input)
```
## 代码演示
### 普遍输入框
```Html
<r-input :placeholder='请输入内容' v-model="value"></r-input>
```

### 带前、后缀图标输入框
```Html
<r-input :placeholder='请输入内容' v-model="value" ><r-icon name="huaban" slot="prefix" ></r-icon></r-input>
```

## 属性
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
<tbody>
<tr>
<td>label</td>
<td>标签</td>
<td><code>String</code></td>
<td>-</td>
</tr>
<tr>
<td>value</td>
<td>当前输入的值</td>
<td><code>String</code></td>
<td>-</td>
</tr>
<tr>
<td>type</td>
<td>可设置为任意原生类型, 如 <code>number</code> <code>tel</code> <code>textarea</code></td>
<td><code>String</code></td>
<td><code>text</code></td>
</tr>
<tr>
<td>styles</td>
<td>可设置输入框样式, 可以带上单位,默认单位是px,如 <code>100</code> <code>100px</code> <code>100vw</code></td>
<td><code>number</code><code>String</code></td>
<td><code>-</code></td>
</tr>
<!-- <tr>
<td>disabled</td>
<td>是否禁用输入框</td>
<td><code>Boolean</code></td>
<td><code>false</code></td>
</tr> -->
</tbody>
</table>


