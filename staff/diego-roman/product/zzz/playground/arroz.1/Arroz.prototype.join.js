Arroz.prototype.join = function(separator) {
    var result = ''
    for (var i = 0; i < this.length; i++) {
        result += this[i]
        if (i < this.length - 1) result += separator
    }
    return result
}

console.log('TEST Arroz.prototype.join')

var fruits = new Arroz
fruits[0] = 'apple'
fruits[1] = 'banana'
fruits[2] = 'cherry'
fruits.length = 3

var joinedFruits = fruits.join('-')
console.log(joinedFruits)
// 'apple-banana-cherry'
