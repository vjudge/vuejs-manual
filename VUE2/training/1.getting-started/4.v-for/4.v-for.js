var app = new Vue({
  el: '#app',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ],
    objects: {
      JavaScript: '一直在学习',
      Java: '打算学习',
      Python: '学完了，实战中',
      Go: '正在学习'
    }
  }
})
