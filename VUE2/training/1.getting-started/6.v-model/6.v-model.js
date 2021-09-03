var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    areaMsg: '',
    checkedNames: [],
    picked: '',
    selected: '',
    multipleSelected: [],
    vforselected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ],
    toggle: 'no'
  }
})
