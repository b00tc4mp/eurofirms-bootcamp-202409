// ARROZ.PROTOTYTPE.INCLUDES


// Implementation of the Arroz function includes
// returns boolean whether the element exists or not

class Arroz {
    constructor () { 
        this.length = 0 
    }

    includes(searchElement, fromIndex) {
        for (let i = (fromIndex === undefined ? 0 : fromIndex); i < this.length; i++){
            let element = this[i]

            if (element === searchElement) return true
        }
        return false
    }
}
// Test with a car in array
console.log('TEST Arroz.prototype.includes')
console.log('CASE check cars includes Renault')
{
    const cars = new Arroz
    cars[0] = 'SEAT'
    cars[1] = 'RENAULT'
    cars[2] = 'KIA'
    cars[3] = 'PEUGEOT'
    cars.length = 4
    const element = cars.includes('RENAULT')
    console.log(element)
    // true
}

// Test with a car that is not in array
console.log('CASE check cars not includes FERRARI')
{
    const cars = new Arroz
    cars[0] = 'SEAT'
    cars[1] = 'RENAULT'
    cars[2] = 'KIA'
    cars[3] = 'PEUGEOT'
    cars.length = 4
    const element = cars.includes('FERRARI')
    console.log(element)
    // false
}


// Test with a car in array and index
console.log('CASE check cars includes Renault at index')
{
    const cars = new Arroz
    cars[0] = 'SEAT'
    cars[1] = 'RENAULT'
    cars[2] = 'KIA'
    cars[3] = 'PEUGEOT'
    cars.length = 4
    const element = cars.includes('RENAULT', 0)
    console.log(element)
    // true
}
