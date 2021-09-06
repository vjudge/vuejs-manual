# 组件

### 组件示例
#### 定义
```
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
```
#### 引用
```
<div id="app">
  <button-counter></button-counter>
</div>
```
#### 创建
```
new Vue({ el: '#app' })
```


### data

















###
