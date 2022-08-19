class ArrayListT {
  public element: Array<Object>
  constructor() {
    this.element = []
  }
  public index: number = 0
  /**
   * 
   * @param ele 
   * add new ele to element
   */
  public add(ele: object) {
    this.checkIndex()
    this.element[this.index++] = ele
  }
  /**
   * check index less than zero
   */
  public checkIndex() {
    if (this.index < 0) {
      throw new Error('索引错误,不能小于0')
    }
  }
  /**
   * 
   * @param index 
   * @returns one of element with index
   */
  get(index: number): object {
    return this.element[index]
  }
  show() {
    this.element.forEach((e) => {
      console.log(e);
    })
  }
  /**
   * 
   * @param value 
   */
  remove(value: number): number
  remove(value: object): object
  remove(value: number | object): number | object {
    this.element = this.element.filter((e, index) => {
      if (typeof value === 'number') {
        return value !== index
      } else {
        return value !== e
      }
    })
    return value
  }
}

let stuOne = { name: "zhangsan", age: 23, phone: 1123123 }
let stuTwo = { name: "zhangsi", age: 26, phone: 2234234 }
let stuTh = { name: "zhangwu", age: 28, phone: 3345345 }

let arrlist = new ArrayListT()
arrlist.add(stuOne)
arrlist.add(stuTwo)
arrlist.add(stuTh)
// arrlist.show()
console.log(arrlist.get(1));
