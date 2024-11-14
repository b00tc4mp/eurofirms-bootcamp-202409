Arroz.prototype.at = function(index) {
    if (index < 0) index = this.length + index
    return this[index]
}

console.log('TEST Arroz.prototype.at')

var fruits = new Arroz
fruits[0] = 'apple'
fruits[1] = 'banana'
fruits[2] = 'cherry'
fruits.length = 3
var secondItem = fruits.at(1)
console.log(secondItem)
// 'banana'

var numbers = new Arroz
numbers[0] = 10
numbers[1] = 20
numbers[2] = 30
numbers[3] = 40
numbers.length = 4
var lastItem =numbers.at(-1)
console.log(lastItem)
// 40

