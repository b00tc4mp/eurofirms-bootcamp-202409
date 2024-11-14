Arroz.prototype.indexOf = function(element) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === element) return i
    }
    return -1
}

console.log('TEST Arroz.prototype.indexOf')

var fruits = new Arroz
fruits[0] = 'apple'
fruits[1] = 'banana'
fruits[2] = 'cherry'
fruits.length = 3
var index = fruits.indexOf('banana')
console.log(index)
// 1

var numbers = new Arroz
numbers[0] = 10
numbers[1] = 20
numbers[2] = 30
numbers[3] = 40
numbers.length = 4
var index = numbers.indexOf(50)
console.log(index)
// -1
