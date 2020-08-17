/* 
  命名空间：
    在代码量较大的情况下，为了避免变量名间的冲突，可将相似功能的函数、类、接口等放置到命名空间内
    Typescript命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象。

  命名空间和模块的区别：
    命名空间：内部模块，主要用于组织代码，避免命名冲突。
    模块：ts外部模块的简称，侧重代码的复用，一个模块里面可能有多个命名空间
*/ 

namespace A {
  export const name = 'tom'
}
namespace B {
  export const name = 'tom1'
}
console.log(B.name)