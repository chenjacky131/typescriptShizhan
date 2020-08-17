"use strict";
/*
  装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。
  通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、方法、属性的功能。
  常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器
  装饰器的写法：普通装饰器（无法传参）、装饰器工厂（可传参）
  装饰器是过去几年中js最大的成就之一，意识es7的标准特性之一
*/
// 1.类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。类装饰器应用于类的构造函数，可以用来监视，修改或替换类定义。
// 装饰器 普通装饰器（无法传参）
// function logClass(params:any){
//   console.log(params)
//   // params 就是当前类
//   params.prototype.apiurl = 'xxx'
//   params.prototype.run = () => {
//     console.log('我是一个类方法')
//   }
// }
// @logClass
// class HttpClient{
//   constructor(){
//   }
//   getData(){
//   }
// }
// let h:any = new HttpClient()
// console.log(h.apiurl)
// h.run()
// 2.类装饰器2，装饰器工厂（可传参）,返回一个函数
// function logClass(params:string){
//   return function(target:any){
//     console.log(target)
//     console.log(params)
//     target.prototype.apiurl = params
//   }
// }
// @logClass('htpp://hello.com/api')
// class HttpClient{
//   constructor(){}
//   getData(){}
// }
// let h:any = new HttpClient()
// console.log(h.apiurl)
// 3.类装饰器重载构造函数
/*
  类装饰器表达式会在运行时当做函数被调用，类的构造函数作为其唯一的参数。
  如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明
*/
// function logClass(target:any){
//   console.log(target)
//   return class extends target{
//     apiurl = '我是修改后的数据'
//     getData(){
//       console.log(this.apiurl)
//     }
//   }
// }
// @logClass
// class HttpClient{
//   public apiurl: string | undefined
//   constructor(){
//     this.apiurl = '我是构造函数里面的apiurl'
//   }
//   getData(){
//     console.log(this.apiurl)
//   }
// }
// let h = new HttpClient()
// console.log(h.apiurl)
// h.getData()
/* 4.属性装饰器
  属性装饰器表达式会在运行时当作函数被调用，传入下列两个参数：
    1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    2.成员的名字。
*/
// function logClass(params:string){
//   return function(target:any){
//     // console.log(params)
//     // console.log(target)
//   }
// }
// function logProperty(params:any){
//   return function(target:any, attr:any){
//     console.log(target, attr)
//     target[attr] = params
//   }
// }
// @logClass('xxx')
// class HttpClient{
//   @logProperty('http://hello.com/api')
//   public url: any | undefined
//   constructor(){
//   }
//   getData(){
//   }
// }
// let h = new HttpClient()
// console.log(h.url)
