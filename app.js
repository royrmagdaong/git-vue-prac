new Vue({
  el:'#vue-app',
  data:{
    name:'Roy',
    time: 'morning',
    website: 'https://youtube.com',
    age: 30,
  },
  methods:{
    greet: function(time){
      return 'Good '+time +' '+this.name;
    },
    addAge: function(age){
      this.age +=age;
    },
    substractAge: function(age){
      this.age -=age;
    }
  }
});