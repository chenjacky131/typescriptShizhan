"use strict";
// 1.类的定义
// class Person{ 
//   name:string // 属性 前面省略的public关键词
//   constructor(name:string){ // 构造函数 实例化的时候触发的方法
//     this.name = name
//   } 
//   run():void{
//     console.log(this.name)
//   }
// }
// let p = new Person('tom') 
// console.log(p.name)
// p.run()
// 2.继承的实现 extends super
// class Person{
//   name:string
//   constructor(name:string){
//     this.name = name
//   }
//   run():string{
//     return `${this.name} 在跑步`
//   }
// }
// let p = new Person('Tom')
// class Web extends Person {
//   constructor(name: string){
//     super(name)
//   }
// }
// let w = new Web('李四')
// console.log(w.run())
// 3.类的修饰符
/*
  public: 公有 在类里面、子类、类外面都可以访问
  protected: 保护类型 在类里面、子类里面可以访问，在类外部没法访问
  private: 饲料油  在类里面可以访问，子类和类外面都不能访问
  如果不加修饰符，默认为共有属性
*/
// class Person {
//   public age:number
//   constructor(age:number){
//     this.age = age
//   }  
// }
// let p = new Person(18)
// console.log(p.age)
// 4.静态属性 静态方法
// class Person {
//   name: string
//   static age:number = 18 // 静态属性
//   constructor(name: string){
//     this.name = name
//   }
//   static info () { // 静态方法 没法直接调用类里面的属性
//     console.log(`person is ${this.age} years old`)
//   }
// }
// Person.info()
// 5.多态：父类定义一个方法不去实现，让继承它的子类去实现 每一个子类有不同的表现
// 多态属于继承
// class Animal {
//   name:string
//   constructor(name:string){
//     this.name = name
//   }
//   eat () {
//     console.log('吃的方法')
//   }
// }
// class Dog extends Animal {
//   constructor(name:string){
//     super(name)
//   }
//   eat () {
//     console.log(`${this.name}吃骨头`)
//   }
// }
// class Cat extends Animal {
//   constructor(name: string){
//     super(name)
//   }
//   eat () {
//     console.log(`${this.name}吃鱼`)
//   }
// }
// 6.抽象类，它是提供其他类继承的基类，不能直接被实例化。
// 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
// abstract抽象方法只能放在抽象类里面
// 抽象类和抽象方法用来定义标准，标准：Animal这个类要求它的子类必须包含eat方法
// abstract class Animal {
//   name:string
//   constructor(name:string){
//     this.name = name
//   }
//   abstract eat():any // 不包含具体实现，必须在派生类中实现
// }
// // let a = new Animal() // 错误的写法
// class Dog extends Animal {
//   // 抽象类的子类必须实现抽象类里面的方法
//   constructor(name: string){
//     super(name)
//   }
//   eat(){
//     console.log(`${this.name}吃粮食`)
//   }
// }
// let d = new Dog('小黑')
// d.eat()
