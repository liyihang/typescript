class ArrayList {
  // 定义引用属性【数组】
  constructor(public ele: Array<Object>) {

  }
  /**
   * 
   * @param index 
   * @returns 
   */
  get(index: number) {
    return this.ele[index]
  }
  /**
   * 展示
   */
  show() {
    this.ele.forEach((e) => {
      console.log(e);
    })
  }
  remove(value: number): number
  remove(value: object): object
  remove(value: number | object): number | object {
    this.ele = this.ele.filter((e, index) => {
      if (typeof value === 'number') {
        return value !== index
      } else {
        return value !== e
      }
    })
    return value
  }
}

let s1 = { name: 'zhangsan', age: 18 }
let s2 = { name: 'zhangsi', age: 19 }
let s3 = { name: 'zhang', age: 21 }
let al = new ArrayList([s1, s2, s3])
// al.show()
// console.log(al.remove(0));
al.remove(s3)
al.show()