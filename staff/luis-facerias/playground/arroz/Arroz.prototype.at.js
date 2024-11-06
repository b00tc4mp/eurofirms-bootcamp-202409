// ARROZ.PROTOTYTPE.AT


// Implementation of the Arroz function at
// return index value

class Arroz { 
    constructor() {
        this.length = 0 
    }

    at(index) {
        if (index > -1)
            return this[index]
        else
            return this[this.length + index]
    }
}


// Test with a values array
console.log('TEST Arroz.prototype.at')
console.log('CASE get element at index 2')

{
    const cars = new Arroz
    cars[0] = 'SEAT'
    cars[1] = 'RENAULT'
    cars[2] = 'KIA'
    cars[3] = 'PEUGEOT'
    cars.length = 4
    const element = cars.at(2)
    console.log(element)
    // KIA
}

console.log('CASE get element at index -3')
{
    const cars = new Arroz
    cars[0] = 'SEAT'
    cars[1] = 'RENAULT'
    cars[2] = 'KIA'
    cars[3] = 'PEUGEOT'
    cars.length = 4
    const element = cars.at(-3)
    console.log(element)
// RENAULT
}
