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
//

