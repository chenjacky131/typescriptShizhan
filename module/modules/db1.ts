// 导出变量的方法1 直接export 变量，可以导出多个   export default 只能导出一次
export const dbUrl = 'xxxx'
export const getData = ():any[] => {
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