function User(QQNo_, QQName_, QQMark_) {
  this.QQNo = QQNo_;
  this.QQName = QQName_;
  this.QQMark = QQMark_;
  this.commonFriends = ['张三', '李四', '王五']
  this.show = function () {
    console.log(`QQ号是${this.QQNo},QQ名是${this.QQName},共同好友是${this.commonFriends}`);
  }
}
const newUser = new User('123123', 'hhh', '123eqw')
newUser.show()