# vue 指令

指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。
v- 前缀作为一种视觉提示，用来识别模板中 Vue 特定的 attribute。


### v-bind
Mustache 语法不能作用在 HTML attribute 上，需要使用 v-bind 指令。


将这个元素节点的 attribute 和 Vue 实例的 value_name property 保持一致。
// attribute：绑定的属性名
// value_name: 绑定的属性值的变量名
v-bind:[attribute]="[value_name]"

```
<div v-bind:id="dynamicId"></div>
<div v-bind:id="'list-' + id"></div>
```

缩写
```
<!-- 动态参数的缩写 (2.6.0+) -->
<a :[key]="url"> ... </a>
<div :id="dynamicId"></div>
<div :id="'list-' + id"></div>
```


### v-if （+ v-else-if）（+ v-else）
判断条件渲染。
v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
```
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```
注意：v-else-if，v-else 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别。


### v-show
根据条件展示元素。不管初始条件是什么，带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS property display。
```
<h1 v-show="ok">Hello!</h1>
```


### v-for
v-for 指令基于一个数组来渲染一个列表。v-for 指令需要使用 item in items 形式的特殊语法，其中 items 是源数据数组，而 item 则是被迭代的数组元素的别名。
```
<ul id="example-1">
  <li v-for="item in items" :key="item.message">
  <!-- <div v-for="item of items"></div> -->
    {{ item.message }}
  </li>
</ul>
<div v-for="(value, name) in object">
  {{ name }}: {{ value }}
</div>
<div v-for="(value, name, index) in object">
  {{ index }}. {{ name }}: {{ value }}
</div>
<!-- 接收一个整数，把模板重复对应次数 -->
<div>
  <span v-for="n in 10">{{ n }} </span>
</div>
```
当 v-for，v-if 处于同一节点，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。



### v-on
绑定动态的事件名处理函数。
```
<a v-on:[eventName]="doSomething"> ... </a>
```

缩写
```
<!-- 缩写 -->
<a @click="doSomething">...</a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a @[event]="doSomething"> ... </a>
```



### v-once
可以执行一次性地插值，当数据改变时，插值处的内容不会更新。注意这会影响到该节点上的其它数据绑定。
```
<span v-once>这个将不会改变: {{ msg }}</span>
```


### 指令参数:[]
从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数：
```
// attributeName 会被作为一个 JavaScript 表达式进行动态求值
<a v-bind:[attributeName]="url"> ... </a>
```


### 修饰符
修饰符 (modifier) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()
```
<form v-on:submit.prevent="onSubmit">...</form>
```
