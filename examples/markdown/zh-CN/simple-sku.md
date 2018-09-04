# SimpleSku 商品选择对话框
本页介绍商品选择对话框

## 单独引入
```JavaScript
import { RSimpleSku } from 'recharger'

Vue.use(RSimpleSku)
```
## 代码演示
```Html
<template>
  <div>
    <p></p>
    <r-lead>商品套餐选择</r-lead>
    <p></p>
    <r-button type="primary" @click="handleClick">点击弹出商品套餐选择</r-button>
    <r-simple-sku :show.sync="show" :srcKey="'picAddr'" :packageList="packageList" @submit="handleSubmit" :active="3">
    </r-simple-sku>
  </div>
</template>
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
<td>srcKey</td>
<td>图片地址关键字</td>
<td><code>String</code></td>
<td><code>src</code></td>
</tr>
<tr>
<td>priceKey</td>
<td>价格关键字</td>
<td><code>String</code></td>
<td><code>price</code></td>
</tr>
<tr>
<td>nameKey</td>
<td>名称关键字</td>
<td><code>String</code></td>
<td><code>name</code></td>
</tr>
<tr>
<td>packageKey</td>
<td>库存最大值关键字</td>
<td><code>String</code></td>
<td><code>count</code></td>
</tr>
<tr>
<td>show</td>
<td>是否显示商品套餐选中弹框</td>
<td><code>Boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td>packageList</td>
<td>可选的商品分类组合信息数组</td>
<td><code>Array</code></td>
<td><code>[{ price: '100', src: '', alt: '商品', name: '默认名字' }]</code></td>
</tr>
<tr>
<td>active</td>
<td>选中的商品分类组合的排序Index（不能大于整个数组的长度，不能小于0）</td>
<td><code>Number</code></td>
<td><code>0</code></td>
</tr>
<tr>
<td>disabled</td>
<td>个数选择栏是否屏蔽点击事件</td>
<td><code>Boolean</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td>disabledInput</td>
<td>个数选择栏是否屏蔽输入事件</td>
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
<td>input</td>
<td>输入事件</td>
<td>输入的值</td>
</tr>
<tr>
<td>change</td>
<td>变更事件</td>
<td>变更的值</td>
</tr>
<tr>
<td>blur</td>
<td>输入框失焦事件</td>
<td>失焦前的值</td>
</tr>
<tr>
<td>plus</td>
<td>点击加号按钮事件</td>
<td>点击后的值</td>
</tr>
<tr>
<td>mins</td>
<td>点击减号按钮事件</td>
<td>点击后的值</td>
</tr>
<tr>
<td>submit</td>
<td>确定选中商品组合时</td>
<td>选中的商品组合对象</td>
</tr>
<tr>
<td>sku-change</td>
<td>选中的商品组合发送改变时</td>
<td>改变选中的商品组合对象</td>
</tr>
<tr>
<td>close</td>
<td>关闭事件</td>
<td><code>Evt</code></td>
</tr>
</tbody>
</table>
