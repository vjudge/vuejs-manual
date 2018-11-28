Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
  el: '#app',
  data: {
    todos: [
        { id: 0, text: '学习 JavaScript' },
        { id: 1, text: '学习 Vue' },
        { id: 2, text: '整个牛项目' }
      ]
  }
})
