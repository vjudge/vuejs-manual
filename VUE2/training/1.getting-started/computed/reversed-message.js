var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!'
  },
  computed: {
    // 计算属性的 getter
    // 你可以像绑定普通 property 一样在模板中绑定计算属性。
    // Vue 知道 app.reversedMessage 依赖于 app.message，因此当 app.message 发生改变时，所有依赖 app.reversedMessage 的绑定也会更新。
    reversedMessage: function () {
      // `this` 指向 app 实例
      return this.message.split('').reverse().join('')
    }
  }
})
