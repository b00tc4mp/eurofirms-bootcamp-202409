function Arroz() {
    this.length = 0
}

Arroz.prototype.forEach = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        callback(element)
    }
}

console.log('TEST Arroz.prototype.forEach')

console.log('CASE multiply each number by itself and print it')

var nums = new Arroz
nums[0] = 1
nums[1] = 2
nums[2] = 3
nums[3] = 4
nums[4] = 5
nums[5] = 6
nums.length = 6
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

var nums = new Arroz
nums[0] = 1
nums[1] = 2
nums[2] = 3
nums[3] = 4
nums[4] = 5
nums[5] = 6
nums.length = 6
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

var nums = new Arroz
nums[0] = 1
nums[1] = 2
nums[2] = 3
nums[3] = 4
nums[4] = 5
nums[5] = 6
nums.length = 6
var res = 0
nums.forEach(function (num) {
    //res = res + num
    res += num
})
console.log(res)
// 21