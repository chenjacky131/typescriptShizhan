// 导出变量的方法2 export {变量1， 变量2}
const dbUrl = 'xxxx'
const getData = ():any[] => {
    console.log('获取数据库的数据')
    return [
      {
        title: '文件1'
      },
      {
        title: '文件2'
      },
    ]
}
export {dbUrl, getData}