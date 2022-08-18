export default class OrderDetail {
  public orderDetailId: number = 0
  public productName: string = 'huahua'
  public price: number = 111
  public count: number = 9999

  constructor(
    orderDetailId_: number,
    productName_: string,
    price_: number,
    count_: number
  ) {
    this.orderDetailId = orderDetailId_
    this.productName = productName_
    this.price = price_
    this.count = count_
  }
}
