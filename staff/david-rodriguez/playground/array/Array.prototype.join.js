console.log('TEST Array.prototype.join')

console.log('CASE join three elements with , ')

var food = ['banana', 'milk', 'sugar']
var smoothie = food.join()
console.log(smoothie)
// 'banana,milk,sugar'  

console.log('CASE join three elements with +')

var food = ['banana', 'milk', 'sugar']
var smoothie = food.join(' + ')
console.log(smoothie)
// 'banana + milk + sugar'

console.log('CASE empty array')

var food = []
food.length = 0
var smoothie = food.join(' + ')
console.log(smoothie)
// ''


console.log('CASE array with null & undefined elements')

var food = ['banana', null, undefined, 'milk', 'sugar']
var smoothie = food.join(' + ')
console.log(smoothie)
// 'banana + + + milk + sugar'