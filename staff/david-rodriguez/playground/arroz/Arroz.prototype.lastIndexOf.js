var Arroz = function () { this.length = 0 }

Arroz.prototype.lastIndexOf = function (searchElement, fromIndex) {
    var position;
    if (fromIndex === undefined) {
        position = this.length - 1;
    } else if (fromIndex < 0) {
        position = this.length + fromIndex;
    } else {
        position = this.length - fromIndex;
    }

    for (var i = position; i >= 0; i--) {

        if (this[i] === searchElement) {
            return i;
        }
    }
    return -1;
}


console.log('CASE search last 2')

nums = new Arroz
nums[0] = 1
nums[1] = 2
nums[2] = 3
nums[3] = 2
nums[4] = 5
nums[5] = 6
nums[6] = 1
nums[7] = 2
nums[8] = 4
nums[9] = 1
nums.length = 10
var index = nums.lastIndexOf(2)
console.log(index)
// 7

console.log('CASE search last 2 from index 4')

nums = new Arroz
nums[0] = 1
nums[1] = 2
nums[2] = 3
nums[3] = 2
nums[4] = 5
nums[5] = 6
nums[6] = 1
nums[7] = 2
nums[8] = 4
nums[9] = 1
nums.length = 10
var index = nums.lastIndexOf(2, 4)
console.log(index)
// 3


console.log('CASE search last 2 use negative index')

nums = new Arroz
nums[0] = 1
nums[1] = 2
nums[2] = 3
nums[3] = 2
nums[4] = 5
nums[5] = 6
nums[6] = 1
nums[7] = 2
nums[8] = 4
nums[9] = 1
nums.length = 10
var index = nums.lastIndexOf(2, -8)
console.log(index)
// 1


console.log('CASE search last invalid number')

nums = new Arroz
nums[0] = 1
nums[1] = 2
nums[2] = 3
nums[3] = 2
nums[4] = 5
nums[5] = 6
nums[6] = 1
nums[7] = 2
nums[8] = 4
nums[9] = 1
nums.length = 10
var index = nums.lastIndexOf(7)
console.log(index)
// -1


console.log('CASE with no solution')

nums = new Arroz
nums[0] = 1
nums[1] = 2
nums[2] = 3
nums[3] = 2
nums[4] = 5
nums[5] = 6
nums[6] = 1
nums[7] = 2
nums[8] = 4
nums[9] = 1
nums.length = 10
var index = nums.lastIndexOf(5, -7)
console.log(index)
// -1


console.log('CASE when fromIndex is bigger than length')

nums = new Arroz
nums[0] = 1
nums[1] = 2
nums[2] = 3
nums[3] = 2
nums[4] = 5
nums[5] = 6
nums[6] = 1
nums[7] = 2
nums[8] = 4
nums[9] = 1
nums.length = 10
var index = nums.lastIndexOf(5, -12)
console.log(index)
// -1