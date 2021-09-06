Vue.component('todo-item', {
  template: '<li>这是个待办项</li>'
})

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

var app = new Vue({
  el: '#app'
})
