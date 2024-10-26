console.log('TEST Array.prototype.forEach')


console.log('CASE join two arrays')

var numbers1 = [1, 2, 3, 4, 5]
var numbers2 = [6, 7, 8, 9]
var allNumbers = numbers1.concat(numbers2)
console.log(allNumbers)
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log('CASE join three arrays')

var numbers1 = [1, 2, 3, 4, 5]
var numbers2 = [6, 7, 8, 9]
var numbers3 = [10, 11, 12]
var allNumbers = numbers1.concat(numbers2, numbers3)
console.log(allNumbers)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


console.log('CASE join array and values [110, 111]')

var numbers1 = [1, 2, 3, 4, 5]
var allNumbers = numbers1.concat([110, 111])
console.log(allNumbers)
// [1, 2, 3, 4, 110, 111]


