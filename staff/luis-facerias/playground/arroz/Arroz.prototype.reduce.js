// ARROZ.PROTOTYPE.REDUCE

// Implementation of the Arroz function reduce
// returns a single value as a result callback function

class Arroz {
    constructor() {
        this.length = 0
    }

    reduce(callback) {
        for (let i = 0; i < this.length; i++){
            let element = this[i]

            callback(element)
        }
    }
}

// Check if reduce returns sigle value as a sum result
console.log('CASE numbers started with S')

{
    const numbers = new Arroz
    numbers[0] = 4
    numbers[1] = 1
    numbers[2] = 5
    numbers[3] = 11
    numbers[4] = 6
    numbers[5] = 7
    numbers[6] = 9
    numbers.length = 7

    numbers.reduce(function (num) {
        return num + num
    })
    // Seat
    // Skoda
}