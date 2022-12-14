type MessageType = "image" | "audio" | string;//微信消息类型
//type xtype=string
//boolean true false
type Message = {
  id: number;
  type: MessageType;
  sendmessage: string;
};
//let msgobj:Message={id:23,type:"df",sendmessage:"abc"}
//let obj={username:"wangwu",age:23}
let messages: Message[] = [
  //let messages: Array<Message> = [
  {
    id: 1, type: 'image', sendmessage: "你好啊,今晚咱们一起去三里屯吧",
  },
  {
    id: 2, type: 'audio', sendmessage: "朝辞白帝彩云间，千里江陵一日还"
  },
  {
    id: 3, type: 'audio', sendmessage: "你好！张无忌"
  },
  {
    id: 4, type: 'image', sendmessage: "刘老根苦练舞台绝技！"
  },
  {
    id: 5, type: 'image', sendmessage: "今晚王牌对王牌节目咋样?"
  }]


function getMessage(value: Number | MessageType): Message | undefined | Array<Message> {
  if (typeof value === 'number') {
    return messages.find((msg) => { return value === msg.id })
  } else {
    return messages.filter((msg) => { return value = msg.type })
  }
}

console.log(getMessage('image'));
