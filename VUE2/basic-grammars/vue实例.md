# vue 实例

每个 Vue 应用都是通过用 Vue 函数创建一个新的 Vue 实例开始的。  

一个 Vue 应用由一个通过 new Vue 创建的根 Vue 实例，以及可选的嵌套的、可复用的组件树组成。

```
var app = new Vue({
  // 选项
})
```

### data
当一个 Vue 实例被创建时，它将 data 对象中的所有的 property 加入到 Vue 的响应式系统中。当这些 property 的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。  
当这些数据改变时，视图会进行重渲染。值得注意的是只有当实例被创建时就已经存在于 data 中的 property 才是响应式的。如果你添加一个新的 property，对新的 property 的改动将不会触发任何视图的更新。

```
var app = new Vue({
  data: data
})
```
























