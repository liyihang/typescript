type sqParam = {
  height?: number,
  width?: number,
  radio?: number
}

class Square {
  public width: number
  public height: number
  constructor(width_: number, height_: number)
  constructor(paramObj: sqParam)
  constructor(valueOfWidth: any, height_: number = 1) {
    if (typeof valueOfWidth === 'object') {
      this.width = valueOfWidth.width
      this.height = valueOfWidth.height
    } else {
      this.width = valueOfWidth
      this.height = height_
    }
  }
  public getArae() {
    return this.height * this.width
  }
}
let sp: sqParam = { height: 40, width: 50 }
let size = new Square(sp)
console.log(size.getArae());