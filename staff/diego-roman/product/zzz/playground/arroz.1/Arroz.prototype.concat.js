Arroz.prototype.concat = function(arroz2) {
    var result = new Arroz
    for (var i = 0; i < this.length; i++) {
        result[result.length] = this[i]
        result.length++
    }
    for (var j = 0; j < arroz2.length; j++) {
        result[result.length] = arroz2[j]
        result.length++
    }
    return result
}

console.log('TEST Arroz.prototype.concat')

var fruits = new Arroz
fruits[0] = 'apple'
fruits[1] = 'banana'
fruits.length = 2

var moreFruits = new Arroz
moreFruits[0] = 'cherry'
moreFruits[1] = 'date'
moreFruits.length = 2

var allFruits = fruits.concat(moreFruits)
console.log(allFruits)
// Arroz { 0: 'apple', 1: 'banana', 2: 'cherry', 3: 'date', length: 4 }
