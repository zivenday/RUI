# Notice 通知顶栏
本页介绍通知顶栏的使用
## 单独引入
```JavaScript
import { RNotice } from 'recharger'

Vue.use(RNotice)
```

## 代码演示
```JavaScript
this.$notice('直接引入字符串-这是提示顶栏信息！')

this.$notice({noticeList,scroll,callback})
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
<tr>
<td>noticList</td>
<td>
信息数组
</td>
<td><code>Array</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td>scroll</td>
<td>
信息左右滚动的速度(ms)
</td>
<td><code>Number</code></td>
<td><code>200</code></td>
</tr>
<tr>
<td>callback</td>
<td>
关闭notice后的回调函数
</td>
<td><code>Function</code></td>
<td><code>-</code></td>
</tr>
</tbody>
</table>