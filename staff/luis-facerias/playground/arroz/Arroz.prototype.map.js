// ARROZ.PROTOTYTPE.MAP


// Implementation of the Arroz function map,
// returns a new array with result of calling a function on every element

class Arroz {
    constructor() {
        this.length = 0
    }

    map(callback) {
        const result = []
        for (let i = 0; i < this.length; i++) {
            var element = this[i]

            result[i] = callback(element)
        }
    }
}

console.log('TEST Array.prototype.some')

// Check if map returns a new array with every multiplied by itself
console.log('CASE every number multiplied by itself')

{
    let numbers = [2, 5, 9, 11, 7, 1]
    let numbers2 = numbers.map((x) => x ** 2)
    console.log(numbers2)
    // [ 4, 25, 81, 121, 49, 1 ]
}