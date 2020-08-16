"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
  模块的概念（官方）：
  关于术语的一点说明：请务必注意一点，Typescript1.5里术语名已经发生了变化。“内部模块”现在称作“命名空间”。
  “外部模块”现在则简称为“模块”模块在其自身的作用域里执行，而不是在全局作用域里；
  这意味着定义在一个模块里的变量，函数，类等等在模块外部是不可见的，除非你明确的使用export的形式之一导出它们。
  相反，如果想使用其它模块导出的变量，函数，类接口等的时候，你必须要导入它们，可以使用import形式之一。

*/
var db2_1 = require("./modules/db2");
console.log(db2_1.dbUrl);
console.log(db2_1.getData());
