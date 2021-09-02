# vue 指令

指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。



### v-bind
Mustache 语法不能作用在 HTML attribute 上，需要使用 v-bind 指令。


将这个元素节点的 attribute 和 Vue 实例的 value_name property 保持一致。
// attribute：绑定的属性名
// value_name: 绑定的属性值的变量名
v-bind:[attribute]="[value_name]"

```
<div v-bind:id="dynamicId"></div>
```


### v-if
