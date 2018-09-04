# message 交互弹框
本页介绍交互弹框
## 单独引入
```JavaScript
import { RMessage } from 'recharger'

Vue.use(RMessage)
```
## 代码演示
```Html
<template>
  <div>
    <p></p>
    <r-lead>轻提示：</r-lead>
    <p></p>
    <r-button type="primary" @click="handleClick1">点击弹出轻提示</r-button>
    <p></p>
    <r-button type="primary" @click="handleClick5">options配置</r-button>
    <p></p>
    <r-lead>信息提示：</r-lead>
    <p></p>
    <r-button type="primary" @click="handleClick2">点击弹出警告信息提示</r-button>
    <p></p>
    <r-button type="primary" @click="handleClick3">点击弹出加载信息提示</r-button>
    <p></p>
    <r-lead>环状加载中：</r-lead>
    <p></p>
    <r-button type="primary" @click="handleClick4">点击弹出环状加载</r-button>
    <p></p>
    <r-lead>确认弹框：</r-lead>
    <p></p>
    <r-button type="primary" @click="handleClick6">点击弹出确认弹框</r-button>
  </div>
</template>
```
```JavaScript
export default {
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {
    handleClick1 () {
      this.$tips('这是一个轻提示')
    },
    handleClick5 () {
      this.$tips({
        message: '提示信息'
      })
    },
    handleClick2 () {
      this.$alert('这是一个警告')
    },
    handleClick3 () {
      this.$loading('加载中...')
      setTimeout(() => {
        this.$loading(false)
      }, 2000)
    },
    handleClick4 () {
      this.$waiting()
      setTimeout(() => {
        this.$waiting(false)
      }, 2000)
    },
    handleClick6 () {
      this.$confirm({
        message: '这是一个确认信息'
      })
    }
  }
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
<td>options</td>
<td>交互弹框需要的选项（title、message、iconShow、iconClass、closeOnClickModal、hasModal）</td>
<td><code>Object</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td>title</td>
<td>交互弹框标题(waiting不能使用)</td>
<td><code>String</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td>message</td>
<td>交互弹框信息(waiting不能使用)</td>
<td><code>String</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td>iconShow</td>
<td>交互弹框图标显示与否(waiting不能使用)</td>
<td><code>Boolean</code></td>
<td><code>true/false</code></td>
</tr>
<tr>
<td>iconClass</td>
<td>交互弹框图标名(waiting不能使用)</td>
<td><code>String</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td>closeOnClickModal</td>
<td>点击模态窗口是否消失弹框</td>
<td><code>Boolean</code></td>
<td><code>true/false</code></td>
</tr>
<tr>
<td>hasModal</td>
<td>是否有模态窗口</td>
<td><code>Boolean</code></td>
<td><code>true/false</code></td>
</tr>
<tr>
<td>cancel</td>
<td>确认弹框取消按钮(confirm使用)</td>
<td><code>Function</code></td>
<td><code>-</code></td>
</tr>
<tr>
<td>ensure</td>
<td>确认弹框确认按钮(confirm使用)</td>
<td><code>Function</code></td>
<td><code>-</code></td>
</tr>
</tbody>
</table>

