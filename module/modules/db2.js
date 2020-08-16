"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = exports.dbUrl = void 0;
// 导出变量的方法2 export {变量1， 变量2}
var dbUrl = 'xxxx';
exports.dbUrl = dbUrl;
var getData = function () {
    console.log('获取数据库的数据');
    return [
        {
            title: '文件1'
        },
        {
            title: '文件2'
        },
    ];
};
exports.getData = getData;
