
# RscrollFresh 上拉刷新下拉加载组件
上拉刷新下拉加载组件

## 单独引入
```JavaScript
import { RScrollFresh } from 'recharger'

Vue.use(RScrollFresh)
```
## 代码演示
```Html
  <r-scroll-fresh :on-refresh="onRefresh" :no-more="noMore" :on-infinite="onInfinite">
  </r-scroll-fresh>
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
<td>fetchMoreDistane</td>
<td>滚动条到底部的距离</td>
<td><code>String</code></td>
<td><code>1500</code></td>
</tr>
<tr>
<td>noMore</td>
<td>是否没有更多数据</td>
<td><code>Boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td>pullText</td>
<td>下拉文本</td>
<td><code>String</code></td>
<td><code>继续下拉</code></td>
</tr>
<tr>
<td>loosenText</td>
<td>刷新文本</td>
<td><code>String</code></td>
<td><code>松开刷新</code></td>
</tr>
<tr>
<td>loadingText</td>
<td>加载文本</td>
<td><code>String</code></td>
<td><code>加载中...</code></td>
</tr>
<tr>
<td>noMoreText</td>
<td>没有更多文本</td>
<td><code>String</code></td>
<td><code>暂无更多</code></td>
</tr>
<tr>
<td>onRefresh</td>
<td>刷新方法</td>
<td><code>Function</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td>onInfinite</td>
<td>加载方法</td>
<td><code>Function</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td>duration</td>
<td>下拉弹回去时间（单位：ms）</td>
<td><code>Number</code></td>
<td><code>300</code></td>
</tr>
</tbody>

## 插槽 Slot
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
</tr></thead>
<tbody>
<tr>
<td>pull-refresh</td>
<td>下拉内容和样式</td>
</tr>
<tr>
<td>load-more</td>
<td>加载更多内容和样式</td>
</tr>
</tbody>
</table>