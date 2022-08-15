// 接口只定义方法和属性 不会去实现
// 接口定义的方法和属性，后续必须都要实现
interface P {
  id: number
  gname: string
  num: number
  price: number
}

function Sum(p: P) {
  console.log('P', p)
}
Sum({ id: 1, gname: 'phone', num: 3, price: 50.3 })
