console.log('TEST Array.prototype.some')

console.log('CASE check if any fruit has more than 5 letters')

var fruits = ['apple', 'banana', 'cherry']
var hasLongFruit = fruits.some(function(fruit) {
    return fruit.length > 5;
})
console.log(hasLongFruit)
// true
