var fruits = ['banana', 'mango', 'piña', 'fresa', 'manzana']
var exists = fruits.some(function (fruit) {
    if (fruit.includes('m'))
        return true
})

console.log(exists)
// true

console.log('CASE find phone smartphone')
var phones = ['blackberry', 'motorola', 'nokia',]

// var smartphone = phones[3]

var exists2 = phones.some(function (phone) {
    if (phone === 'nokia') {
        return true
    } else {
        return false
    }
})
console.log(exists2)
//true
