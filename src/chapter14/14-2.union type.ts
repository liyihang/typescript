// 1.联合类型分为基本类型和引用类型
/**
 * 基本类型
 * @param pre
 * @param next
 */
function add(pre: number | string, next: boolean | number) {}
add('1', 3)
// 引用类型联合类型
interface Car {
  brand: string
  NO: number
  price: number
  load(): void
}
interface Truck {
  brand: string
  wheel: number
  price: number
}
function Carry(vechile: Car | Truck) {
  // 联合类型只有两个类型的共有类型
  vechile.brand, vechile.price
}
