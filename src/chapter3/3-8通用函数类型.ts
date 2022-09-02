// 通用类型函数

type commFunc = (...args: any) => any

// interface

interface commFuncInter {
  (...args: any): any
}

let func: commFuncInter = function (count: number, money: number): void {

} 
