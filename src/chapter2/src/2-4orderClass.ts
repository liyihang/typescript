import OrderDetail from './2-5orderDetail'
class Order {
  public orderId: number = 0
  public date: Date = new Date()
  public custName: string = 'hahh'
  public phone: string = '111'
  public orderDetail: Array<OrderDetail> = []
  constructor(
    orderId_: number,
    date_: Date,
    custName_: string,
    phone_: string,
    orderDetail_: Array<OrderDetail>
  ) {
    this.orderId = orderId_
    this.date = date_
    this.custName = custName_
    this.phone = phone_
    this.orderDetail = orderDetail_
  }
}

let orderone = new OrderDetail(10, '手机', 1200, 3600)
let ordertwo = new OrderDetail(10, '手机', 1200, 3600)
let orderDate = new Date()

let order = new Order(101, orderDate, 'zhangsan', '123123', [orderone, ordertwo])
console.log(order)