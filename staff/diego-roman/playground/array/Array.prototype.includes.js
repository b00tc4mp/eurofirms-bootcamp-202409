console.log('TEST Array.prototype.includes')

console.log('CASE check if banana is in fruits')

var fruits = ['apple', 'banana', 'cherry']
var hasBanana = fruits.includes('banana')
console.log(hasBanana)
// true

console.log('CASE check if 50 is in numbers')

var numbers = [10, 20, 30, 40]
var hasFifty = numbers.includes(50)
console.log(hasFifty)
// false
