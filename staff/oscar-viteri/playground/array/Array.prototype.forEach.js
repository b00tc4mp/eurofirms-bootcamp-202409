console.log('TEST Array.prototype.forEach')

console.log('CASE multiply each number by itself and print it')

var nums = [1, 2, 3, 4, 5, 6]
nums.forEach(function (num) {
    var res = num * num
    console.log(res)
})
// 1
// 4
// 9
// 16
// 25
// 36

console.log('CASE add 10 to each number and print it')

var nums = [1, 2, 3, 4, 5, 6]
nums.forEach(function (num) {
    var res = num + 10
    console.log(res)
})
// 11
// 12
// 13
// 14
// 15
// 16

console.log('CASE add all numbers')

var nums = [1, 2, 3, 4, 5, 6]
var res = 0
nums.forEach(function (num) {
    //res = res + num
    res += num
    console.log(res)
})
// 21