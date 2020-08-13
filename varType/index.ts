// 1.布尔类型(boolean) true false
// let bool:boolean = true
// bool = false

// 2.数字类型(number) 
// let n:number = 123
// n = 1111

// 3.字符串类型(string)
// let str:string = 'hello'
// str = 'world'

// 4.数组类型(array)  ts中定义是数组有两种类型

  // 1.定义数组的方式
  // let arr:number[] = [1,2,3]

  // 2.定义数组的方式
  // let arr1:Array<number> = [1,2,3]

// 5.元组类型(tuple) 属于数组的一种
// let arr2:[string, number, boolean] = ['hello',2, false]

// 6.枚举类型(enum) 标识状态或者固定值
// enum Flag {success = 1, error = -1}
// let f:Flag = Flag.success
// console.log(Flag.error)

// enum Color {red, blue=5, yellow}
// let c:Color = Color.yellow // 5 + 1
// console.log(Color.yellow)
// console.log(c)

// 7.任意类型(any)
// let oBox:any = document.getElementById('box') // 任意类型的用法
// oBox.style.color = 'red'

// 8.null 和 undefined 是其它(never类型)类型的子类型

  // let und:strng
  // console.log(und) 报错

  // let und:undefined
  // console.log(und)

  // let und:number | undefined
  // und = 1
  // und = undefined
  // // console.log(und)

  // 一个元素可能是number ，可能是undefined 也可能是null
  // let und: number | undefined | null

// 9.void类型：typescript中的void标识没有任何类型，一般用于定义方法的时候方法没有返回值
// function run():void{
//   // console.log('run')
// }
// run()

// 10.never类型：是其它类型(包括 null 和 undefined) 的子类型，代表从不会出现的值。这意味着申明never的变量只能被never类型所赋值
// let nev1:undefined
// nev1 = undefined

// let nev2:null
// nev2 = null

// let nev3:never

// nev3 = (() => {
//   throw new Error('错误')
// })()