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

/* 5.方法装饰器
    它会被应用到方法的属性描述符上，可以用来监视，修改或者替换方法定义。
    方法装饰器会在运行时传入下列3个参数：
      1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
      2.成员的名字。
      3.成员的属性描述符。
*/
// function get(params: any){
//   return function(target: any,methodName: any,desc: any){
//     console.log(params,target,methodName, desc)
//     target.url = 'xxxx'
//     target.run = () => console.log('run')
//     // 修改装饰器的方法,而不是替换
//     const oldMed = desc.value
//     desc.value = function(...args:any[]) {
//       console.log('getData修改后的方法', ...args)
//       oldMed.apply(this, args)
//     }
//   }
// }
// class HttpClient{
//   public url:string | undefined
//   constructor(){}
//   @get('http://hello.com/api')
//   getData(val: number){
//     console.log('getData原方法', val)
//   }
// }
// let h:any = new HttpClient()
// console.log(h.url)
// h.run()
// h.getData(12)

/* 6.方法参数装饰器
  参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元数据，传入下列三个参数：
  1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
  2.参数的名字
  3.参数在函数参数列表中的索引。
*/
// function logParams(params:any){
//   return function(target:any, MethodName:any,paramsIndex:any){
//     target.apiurl = params
//     console.log(params,target, MethodName, paramsIndex)
//   }
// }
// class HttpClient{
//   public url: string | undefined
//   constructor(){}
//   getData(@logParams('uuid') uuid:any){
//     console.log(uuid)
//   }
// }
// let h:any = new HttpClient()
// h.getData(123456)
// console.log(h.apiurl)

//  7.装饰器执行顺序
// 属性-> 方法-> 方法参数 -> 类，如果有多个同类型的装饰器，会先执行后面的
function logClass1(params:string){
  return function(target:any){
    console.log('类装饰器1')
  }
}
function logClass2(params:string){
  return function(target:any){
    console.log('类装饰器2')
  }
}
function logProperty(params?:string){
  return function(target:any, propertyName:any){
    console.log('属性装饰器3')
  }
}
function logMethod(params?:string){
  return function(target:any, attrName:any,des:any){
    console.log('方法装饰器4')
  }
}
function logParam1(params?:string){
  return function(target:any, attrName:any,des:any){
    console.log('方法参数装饰器1:5')
  }
}
function logParam2(params?:string){
  return function(target:any, attrName:any,des:any){
    console.log('方法参数装饰器2:6')
  }
}
@logClass1('http://hello.com/api')
@logClass2('xxx')
class HttpClient{
  @logProperty()
  apiurl:string | undefined
  constructor(){}
  @logMethod()
  getData(){
    return true
  }
  setData(@logParam1() attr1:any, @logParam2() attr2:any){}
}
let h = new HttpClient()