/*
功能：定义一个操作数据库的库 支持Mysql Mssql Mongodb
要求1： Mysql Mssql Mongodb功能一样 都有 add update delete get 方法
注意：约束统一的规范、以及代码重用
解决方案：需要约束规范所以要定义接口，需要代码重用所以用到泛型
  1.接口：在面向对象的编程中，接口是一种规范的定义，定义了行为和动作的规范
  2.泛型 通俗理解：泛型就是解决类 接口 方法的复用性
*/

interface DBI<T>{
  add(info:T):boolean;
  update(info:T, id:number):boolean;
  delete(id:number):boolean;
  get(id:number):any;
}
// 定义一个Mysql操作数据库的类 注意：要实现泛型接口 这个类也应该是一个泛型类
class MysqlDB<T> implements DBI<T>{
  constructor(){
    console.log('与数据库建立连接')
  }
  add(info: T): boolean {
    console.log(info)
    return true
  }  
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number):any[] {
    const list = [
      {
        name: 'tom1',
        age: 19,
        sex: 'male'
      },
      {
        name: 'tom2',
        age: 19,
        sex: 'male'
      },
      {
        name: 'tom3',
        age: 19,
        sex: 'male'
      }
    ]
    return list
  }
}
// 定义一个Mssql操作数据库的类
class MssqlDB<T> implements DBI<T>{
  add(info: T): boolean {
    throw new Error("Method not implemented.");
  }  
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number) {
    throw new Error("Method not implemented.");
  }  
}
// 定义一个Mongodb操作数据库的类
class MongoDB<T> implements DBI<T>{
  add(info: T): boolean {
    throw new Error("Method not implemented.");
  }  
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number) {
    throw new Error("Method not implemented.");
  }
}
// 操作用户表 定义一个User类和数据表做映射
class User{
  username: string | undefined
  password: string | undefined
}
let u = new User()
u.username = '张三'
u.password = '123456'

let oMysql = new MysqlDB<User>() // 类作为参数来约束数据传入的类型
oMysql.add(u)
console.log(oMysql.get(4))
