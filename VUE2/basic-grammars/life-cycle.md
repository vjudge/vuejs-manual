# vue 生命周期

每个 Vue 实例在被创建时都要经过一系列的初始化过程，同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。

生命周期钩子的 this 上下文指向调用它的 Vue 实例。

### created
一个实例被创建之后执行该代码。
```
var app = new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` 指向 app 实例
    console.log('a is: ' + this.a)
  }
})
// => "a is: 1"
```


### mounted






### updated






### destoryed




### 生命周期图示
![生命周期图示](https://github.com/vjudge/vuejs-study/blob/master/images/vue2-lifecycle.png)
