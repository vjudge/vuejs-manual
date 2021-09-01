const Counter = {
  data() {
    return {
      counter: 0
    }
  }
}

Vue.createApp(Counter).mount('#counter')


var app = new Vue({
  el: '#app',
  data: {
    Counter
  }
})