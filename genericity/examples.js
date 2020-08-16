"use strict";
/*
功能：定义一个操作数据库的库 支持Mysql Mssql Mongodb
要求1： Mysql Mssql Mongodb功能一样 都有 add update delete get 方法
注意：约束统一的规范、以及代码重用
解决方案：需要约束规范所以要定义接口，需要代码重用所以用到泛型
  1.接口：在面向对象的编程中，接口是一种规范的定义，定义了行为和动作的规范
  2.泛型 通俗理解：泛型就是解决类 接口 方法的复用性
*/
// 定义一个Mysql操作数据库的类 注意：要实现泛型接口 这个类也应该是一个泛型类
var MysqlDB = /** @class */ (function () {
    function MysqlDB() {
        console.log('与数据库建立连接');
    }
    MysqlDB.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.get = function (id) {
        var list = [
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
        ];
        return list;
    };
    return MysqlDB;
}());
// 定义一个Mssql操作数据库的类
var MssqlDB = /** @class */ (function () {
    function MssqlDB() {
    }
    MssqlDB.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MssqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MssqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MssqlDB.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MssqlDB;
}());
// 定义一个Mongodb操作数据库的类
var MongoDB = /** @class */ (function () {
    function MongoDB() {
    }
    MongoDB.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MongoDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MongoDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MongoDB.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MongoDB;
}());
// 操作用户表 定义一个User类和数据表做映射
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = '张三';
u.password = '123456';
var oMysql = new MysqlDB(); // 类作为参数来约束数据传入的类型
oMysql.add(u);
console.log(oMysql.get(4));
