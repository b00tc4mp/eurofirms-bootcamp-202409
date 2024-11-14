Arroz.prototype.shift = function() {
    if (this.length === 0) return undefined;
    
    var first = this[0];
    for (var i = 0; i < this.length - 1; i++) {
        this[i] = this[i + 1];
    }
    delete this[this.length - 1];
    this.length--;
    
    return first;
}

console.log('TEST Arroz.prototype.shift')

var fruits = new Arroz
fruits[0] = 'apple'
fruits[1] = 'banana'
fruits[2] = 'cherry'
fruits.length = 3

var firstFruit = fruits.shift()
console.log(firstFruit)
// 'apple'
console.log(fruits)
// Arroz { 0: 'banana', 1: 'cherry', length: 2 }
