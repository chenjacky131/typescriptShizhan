// es5的继承
// function Person(name, age){
//   this.name = name
//   this.age = age
//   this.run = function(){
//     console.log(this.name + '在跑步')
//   }
// }
// Person.prototype.work = function(){
//   console.log(this.name + '在工作')
// }
// function Web(name, age){
//   Person.call(this, name, age) // 对象冒充继承
// }
// Web.prototype = Person.prototype
// var w = new Web('李四', 24)
// console.log(w.name, w.age)
// w.run()
// w.work()