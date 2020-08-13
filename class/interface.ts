
// 接口。接口的作用，在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一定的限制和规范作用。
// 接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这些类里必须提供某些方法,
// 提供这些方法的类就可以满座实际需要。
// 定义标准

// 1.行为和动作的规范，对批量方法进行约束
// interface Fullname{
//   firstName:string; // 分号结束
//   secondName:string;
// }

// function pringName(name:Fullname){
//   // 必须传入对象 firstName secondName
//   console.log(`${name.firstName}--${name.secondName}`)
// }
// pringName({firstName: 'tom', secondName: 'tang'})

// 2.接口：可选属性
// interface Fullname{
//   firstName: string
//   secondName?:string // 可选属性
// }
// function pringName(name: Fullname){
//   console.log(`${name.firstName} -- ${name.secondName}`)
// }
// pringName({firstName:'tom'})

// 3.函数类型接口：对方法传入的参数以及返回值进行约束
// 加密的函数类型接口
// interface encrypt{
//   (key: string, value: string):string
// }
// let md5:encrypt = (key:string, value:string):string => {
//   return `${key}${value}`
// }
// console.log(md5('_dsfsdf12', '123456'))

// 4.可索引接口：数组、对象的约束 （不常用）
  // a.对数组的约束
  // interface UserArr{
  //   [index:number]:any
  // }
  // let arr:UserArr = [12, 'bb ']
  // b.对对象的约束
  // interface UserObj{
  //   [index:string]:string
  // }
  // let obj:UserObj = {name: 'tom'}

// 5.类类型接口：对类的约束，和抽象类abstract有点相似
// interface Animal{
//   name:string
//   eat(str:string):void
// }
// class Dog implements Animal{
//   name:string
//   constructor(name:string){
//     this.name = name
//   }
//   eat(str:string):void{
//     console.log(`${this.name}吃${str}`)
//   }
// }
// let d = new Dog('小黑')
// d.eat('骨头')

// 6.接口扩展：接口可以继承接口
// interface Animal{
//   eat():void
// }
// interface People extends Animal{
//   work():string
// }
// class BlackPerple implements People{
//   constructor(){

//   }
//   eat(){
//     console.log('黑人吃西瓜')
//   }
//   work():string{
//     return '黑人在工作'
//   }
// }
// let b = new BlackPerple()
// b.eat()
// console.log(b.work())