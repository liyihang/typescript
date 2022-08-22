class Container<T extends object>{
  t!: T;
  constructor(t_: T) {
    this.t = t_
  }
  show() {
    console.log(this.t);
    return this.t
  }
}

class Customer {
  constructor(public name: string) {

  }
}
let obj: object = { usename: 'lisi', age: 23 }



type objType = { usename: string, age: number }
let obj1: objType = { usename: 'wuqi', age: 33 }
// let c = new Container<objType>()
// c.show()
let cus = new Customer('zhansan')
let objclass = new Container<Customer>(cus)
objclass.show()