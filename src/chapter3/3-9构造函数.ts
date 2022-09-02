class CommerialBank {
  public address: string = "beijing"
  public name: string = "yilu"
  static count: number
  constructor(address: string, name: string) {
    this.address = address
    this.name = name
  }
  load(): string {
    console.log(this.name + "在银行上班");
    return "123"
  }
}
let cb = new CommerialBank('bj', '哈哈哈').load()
console.log(cb);