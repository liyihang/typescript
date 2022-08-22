/**
 *
 * @param arr
 * @returns
 */
function quicksort(arr) {
    if (arr.length < 2)
        return arr;
    var left = [];
    var right = [];
    var mid = arr.splice(Math.floor(arr.length / 2), 1)[0];
    for (var index = 0; index < arr.length; index++) {
        if (arr[index] < mid) {
            left.push(arr[index]);
        }
        else {
            right.push(arr[index]);
        }
    }
    return quicksort(left).concat(mid, quicksort(right));
}
var arrlist = ["成都", "大连", "郑州", "杭州", "北京", '长水'];
// let arr = quicksort(arrlist)
//console.log(arr); //output wrong squence
function sortChinese(arr) {
    return arr.sort(function (first, second) {
        return first.localeCompare(second, 'zh-CN');
    });
}
var word = sortChinese(arrlist);
console.log(word);
