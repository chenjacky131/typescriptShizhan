"use strict";
// 泛型：可以支持不特定的数据类型 要求：传入的参数和返回的参数一致
// 1.T表示泛型，具体是什么类型是调用这个方法时候决定的
// function getData<T>(value:T):T{
//   return value
// }
// console.log(getData<number>(123))
// console.log(getData<string>('string'))
// 2.1泛型类：比如有个最小对算法，需要同时支持返回数字和字符串两种类型。 通过类的泛型来实现
// class MinClass<T>{
//   public list:T[] = []
//   add(value:T):void{
//     this.list.push(value)
//   }
//   min():T{
//     let minNum = this.list[0]
//     for(var i = 0; i < this.list.length; i++){
//       if(minNum > this.list[i]){
//         minNum = this.list[i]
//       }
//     }
//     return minNum
//   }
// }
// let m1 = new MinClass<number>() // 实例化类 并且定制了类的T代表的类型是number  
// m1.add(100)
// m1.add(2123)
// m1.add(3)
// console.log(m1.min())
// let m2 = new MinClass<string>() // 实例化类 并且定制了类的T代表的类型是number
// m2.add('a')
// m2.add('b')
// m2.add('c')
// console.log(m2.min())
// 2.2泛型类：操作数据库的泛型类
// class MysqlDb<T>{
//   add(info:T):boolean{
//     console.log(info)
//     return true
//   }
// }
//   // 定义一个user类
//   class User{
//     name: string | undefined
//     password: string | undefined
//   }
//   // 定义一个article类
//   class Article{
//     title: string | undefined
//     des: string | undefined
//     status: number | undefined
//     constructor(params:{
//       title: string | undefined,
//       des: string | undefined,
//       status?: number | undefined
//     }) {
//       this.title = params.title
//       this.des = params.des
//       this.status = params.status
//     }
//   }
//   let m1 = new MysqlDb<User>()  
//   let u = new User()
//   u.name = 'tom'
//   u.password = '12323'
//   m1.add(u)
//   let m2 = new MysqlDb<Article>()
//   let a = new Article({
//     title : '新闻',
//     des : '焦点饭堂栏目'
//   })
//  a.status = 0
//   m2.add(a)
// 3.泛型接口
// interface ConfigFn{
//   <T>(value:T):T
// }
// let getData:ConfigFn = function<T>(value:T):T{
//   return value
// }
// console.log(getData<string>('tom'))
// console.log(getData<number>(18))
