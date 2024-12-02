Arroz.prototype.forEach = function(callback) {
    for (var i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

console.log('TEST Arroz.prototype.forEach')

var fruits = new Arroz
fruits[0] = 'apple'
fruits[1] = 'banana'
fruits[2] = 'cherry'
fruits.length = 3

fruits.forEach(function(fruit) {
    console.log(fruit)
});
// apple
// banana
// cherry
