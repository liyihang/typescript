function quicksort(arr: Array<any>): any {
  if (arr.length < 2) return arr
  var left: Array<any> = []
  var right: Array<any> = []
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
let arrlist = [1, 3, 4, 2, 5, 8, 7]
let arr = quicksort(arrlist)
console.log(arr);


export { }