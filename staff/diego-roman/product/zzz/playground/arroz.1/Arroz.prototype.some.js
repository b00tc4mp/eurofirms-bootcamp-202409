Arroz.prototype.some = function(callback) {
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) return true;
    }
    return false;
}

console.log('TEST Arroz.prototype.some')

var fruits = new Arroz
fruits[0] = 'apple'
fruits[1] = 'banana'
fruits[2] = 'cherry'
fruits.length = 3

var hasLongFruit = fruits.some(function(fruit) {
    return fruit.length > 5;
})
console.log(hasLongFruit)
// true
