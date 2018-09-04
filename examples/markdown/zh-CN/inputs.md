
# Input 输入框
本页介绍输入框组件的运用

## 单独引入
```JavaScript
import { RInput } from 'recharger'

Vue.use(RInput)
```
## 代码演示
### 普遍输入框
```Html
<r-input :placeholder='请输入内容' v-model="value"></r-input>
```

### 带前、后缀图标输入框
```Html
<r-input :placeholder='请输入内容' v-model="value" ><r-icon name="huaban" slot="prefix" ></r-icon></r-input>
<r-input :placeholder='请输入内容' v-model="value" ><r-icon name="huaban" slot="suffix" ></r-icon></r-input>
```
### 自动补全输入框
```Html
<r-auto-complete :placeholder='请输入内容' v-model="value" ></r-auto-complete>
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
<td>可设置输入框样式, 可以带上单位,默认单位是px,如 
<code>100</code> 
<code>100px</code> 
<code>100vw</code>
</td>
<td>
<code>number</code>
<code>String</code>
</td>
<td><code>-</code></td>
</tr>
<tr>
<td>textStyles</td>
<td>文字输入框样式, 可以带上单位,默认单位是px,如 
<code>100</code> 
<code>100px</code> 
<code>100vw</code>
</td>
<td>
<code>number</code>
<code>String</code>
</td>
<td><code>-</code></td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用输入框</td>
<td><code>Boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td>width</td>
<td>输入框宽度, 可以带上单位,默认单位是px,如 
<code>100</code> 
<code>100px</code> 
<code>100vw</code>
。优先级比styles低
</td>
<td>
<code>number</code>
<code>String</code>
</td>
<td><code>-</code></td>
</tr>
<tr>
<td>height</td>
<td>输入框高度, 可以带上单位,默认单位是px,如 
<code>100</code> 
<code>100px</code> 
<code>100vw</code>
。优先级比styles低
</td>
<td>
<code>number</code>
<code>String</code>
</td>
<td><code>-</code></td>
</tr>
<tr>
<td>inputType</td>
<td>输入类型，与input标签type一样</td>
<td><code>String</code></td>
<td><code>text</code></td>
</tr>
<tr>
<td>type</td>
<td>输入样式类型:<code>large</code>
<code>transparent</code>  </td>
<td><code>String</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td>placeholder</td>
<td>
输入内容提示
</td>
<td><code>String</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td>fetch-suggestions</td>
<td>
自动补全(必须)
</td>
<td><code>Function</code></td>
<td><code>-</code></td>
</tr>
</tbody>
</table>

## 事件 Evt

Input 支持默认的focus、 input、change、blur事件
AutoComplete 支持默认的focus、input 、change 、blur事件

<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
<th>返回值</th>
</tr></thead>
<tbody>
<tr>
<td>select</td>
<td>自动补全选中选项</td>
<td>选中的选项</td>
</tr>
</tbody>
</table>

## 插槽 Slot
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
</tr></thead>
<tbody>
<tr>
<td>prefix</td>
<td>自定义输入框前缀图标</td>
</tr>
<tr>
<td>suffix</td>
<td>自定义输入框后缀图标</td>
</tr>
</tbody>
</table>



