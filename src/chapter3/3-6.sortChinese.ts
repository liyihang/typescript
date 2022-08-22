/**
 * 
 * @param arr 
 * @returns 
 */
function quicksort<T>(arr: Array<T>): Array<T> {
  if (arr.length < 2) return arr
  var left: Array<T> = []
  var right: Array<T> = []
  var mid = arr.splice(Math.floor(arr.length / 2), 1)[0]
  for (var index = 0; index < arr.length; index++) {
    if (arr[index] < mid) {
      left.push(arr[index])
    } else {
      right.push(arr[index])
    }
  }
  return quicksort(left).concat(mid, quicksort(right))
}
let arrlist: Array<string> = ["成都", "大连", "郑州", "杭州", "北京", '长水']
// let arr = quicksort(arrlist)
//console.log(arr); //output wrong squence
/**
 * 
 * @param arr 
 * @returns 
 */
function sortChinese<T>(arr: Array<T>): T[] {
  return arr.sort(function (first, second) {
    return (first as any).localeCompare(second as any, 'zh-CN')
  })
}
// let word = sortChinese(arrlist)
// console.log(word);
// 字符串排序

function sortString(str: string): string {
  let strArr = str.split('')
  let stdsort = quicksort(strArr)
  return stdsort.join('')
}

let str = "helword"
console.log(sortString(str));