// ARROZ.PROTOTYTPE.INDEXOF


// Implementation of the Arroz function IndexOf
// returns first index where element can be found

class Arroz {
    constructor () { 
        this.length = 0
    }
    
    indexOf(searchElement, fromIndex) {
        for (let i = (fromIndex === undefined ? 0 : (fromIndex < 0 ? this.length + fromIndex : fromIndex)); i < this.length; i++){
            let element = this[i]

            if (element === searchElement) return i
        }
        return -1
    }
}


// Test with a car in array
console.log('TEST Arroz.prototype.indexOf')
console.log('CASE get index of Renault')

{
    const cars = new Arroz
    cars[0] = 'SEAT'
    cars[1] = 'RENAULT'
    cars[2] = 'KIA'
    cars[3] = 'PEUGEOT'
    cars.length = 4
    const element = cars.indexOf('RENAULT')
    console.log(element)
    // 1
}

// Test with a car and index in array
console.log('TEST Arroz.prototype.indexOf')
console.log('CASE get index of Renault starting at offset -2')
{
    const cars = new Arroz
    cars[0] = 'SEAT'
    cars[1] = 'RENAULT'
    cars[2] = 'KIA'
    cars[3] = 'PEUGEOT'
    cars.length = 4
    const element = cars.indexOf('RENAULT', -4)
    console.log(element)
    // 1
}
