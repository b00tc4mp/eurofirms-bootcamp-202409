// ARROZ.PROTOTYTPE.SHIFT


// Implementation of the Arroz function shift
// remove first element from array 

class Arroz {
    constructor() {
        this.length = 0
    }

    shift(){
        const removed = this[0]
        for (let i = 0; i < this.length - 1; i++){
            this[i] = this[i + 1]
        }
        this.length--
        delete this[this.length]
        return removed
    }
}

// Test with a values array
console.log('TEST Arroz.prototype.shift')
console.log('CASE remove first element from array')

{
    const cars = new Arroz
    cars[0] = 'SEAT'
    cars[1] = 'RENAULT'
    cars[2] = 'KIA'
    cars[3] = 'PEUGEOT'
    cars.length = 4
    const element = cars.shift()
    console.log('ELEMENT: ', element)
    console.log('CARS: ', cars)
    // KIA
}


