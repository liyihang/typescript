class People {
  public name: string = '战三'
  public age: number = 23

  public doFun(add: string): void {
    console.log(`eat eat with ${this.name} at ${add}`)
  }
}

let w = new People()
// w.age = 23
// w.name = 'haha'
w.doFun('wd')
