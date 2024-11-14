Arroz.prototype.find = function(callback) {
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) return this[i];
    }
    return undefined;
}

console.log('TEST Arroz.prototype.find')

var fruits = new Arroz
fruits[0] = 'apple'
fruits[1] = 'banana'
fruits[2] = 'cherry'
fruits.length = 3

var longFruit = fruits.find(function(fruit) {
    return fruit.length > 5;
})
console.log(longFruit)
// 'banana'
