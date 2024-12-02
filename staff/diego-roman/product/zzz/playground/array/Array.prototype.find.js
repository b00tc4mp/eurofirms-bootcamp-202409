console.log('TEST Array.prototype.find')

console.log('CASE find the first fruit with more than 5 letters')

var fruits = ['apple', 'banana', 'cherry']
var longFruit = fruits.find(function(fruit) {
    return fruit.length > 5;
})
console.log(longFruit)
// 'banana'
