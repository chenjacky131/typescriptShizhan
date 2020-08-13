"use strict";
// 接口。接口的作用，在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一定的限制和规范作用。
// 接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这些类里必须提供某些方法,
// 提供这些方法的类就可以满座实际需要。
// 定义标准
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.eat = function (str) {
        console.log(this.name + "\u5403" + str);
    };
    return Dog;
}());
var d = new Dog('小黑');
d.eat('骨头');
