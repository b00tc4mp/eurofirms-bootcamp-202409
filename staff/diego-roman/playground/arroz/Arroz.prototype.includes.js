Arroz.prototype.includes = function(element) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === element) return true
    }
    return false
}

console.log('TEST Arroz.prototype.includes')

var fruits = new Arroz
fruits[0] = 'apple'
fruits[1] = 'banana'
fruits[2] = 'cherry'
fruits.length = 3
var hasBanana = fruits.includes('banana')
console.log(hasBanana)
// true

var numbers = new Arroz
numbers[0] = 10
numbers[1] = 20
numbers[2] = 30
numbers[3] = 40
numbers.length = 4
var hasFifty = numbers.includes(50)
console.log(hasFifty)
// false
