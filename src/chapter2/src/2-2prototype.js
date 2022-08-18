function UserInfo(QQNo_, QQName_, QQMark_) {
  this.QQNo = QQNo_;
  this.QQName = QQName_;
  this.QQMark = QQMark_;
  // this.commonFriends = ['张三', '李四', '王五']
  // this.show = function () {
  //   console.log(`QQ号是${this.QQNo},QQ名是${this.QQName},共同好友是${this.commonFriends}`);
  // }
}
UserInfo.prototype.commonFriends = ['张三', '李四', '王五']
UserInfo.prototype.show = function () {
  console.log(`QQ号是${this.QQNo},QQ名是${this.QQName},共同好友是${this.commonFriends}`);
}
const newUser = new UserInfo('123123', 'hhh', '123eqw')
newUser.show()
console.log('\n\r');
console.log(newUser.commonFriends);