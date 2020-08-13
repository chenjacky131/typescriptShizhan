"use strict";
// 1.函数申明法
// function run1():string{
//   return 'run'
// }
// 2.匿名函数
// let run2 = function():number{
//   return 123
// }
// 3.定义方法传参
// function getInfo(name:string, age:number):string{
//   return `${name} --- ${age}`
// }
// getInfo('tom', 18)
// 4.没有返回值
// function run3():void{
//   console.log('run3')
// }
// 5.方法可选参数，可选参数必须配置到参数的最后面
// function getInfo(name:string, age?:number):string{
//   return `${name} --- ${age}`
// }
// console.log(getInfo('Tom', 112))
// 6.默认参数
// function getInfo(name:string, age:number = 18):string{
//   return `${name} --- ${age}`
// }
// console.log(getInfo('Tom'))
// 7.剩余参数
// function sum(...nums:number[]):number{
//   let sum = 0
//   for(let i = 0; i < nums.length; i++){
//     sum += nums[i]
//   }
//   return sum
// }
// console.log(sum(1,1,2,3,3,5))
// 8.ts函数的重载
// Java中方法的重载指的是两个或者两个以上同名的函数，但他们的参数不一样，这时就会出现重载
// typescript中的重载，通过同一个函数提供多个函数类型定义来实现多种功能的目的
// function getInfo(name:string):string
// function getInfo(age:number):string
// function getInfo(str:any):any{
//   if(typeof str === 'string'){
//     console.log(`我叫:${str}`)
//   }else{
//     console.log(`我的年龄是:${str}`)
//   } 
// }
// getInfo('Tom')
// getInfo(18)
// getInfo(true) // 报错
