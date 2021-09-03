var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    counter: 0,
    name: 'clicked'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert(this.name)
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    },
    say: function (msg) {
      alert(msg)
    }
  }
})
