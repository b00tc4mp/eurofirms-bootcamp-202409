
// ARROZ.PROTOTYTPE.FILL


// Implementation of the Arroz function fill,
// fill array with values between two index, return new array

class Arroz {
    constructor() { 
        this.length = 0 
    }

    fill( element, start, end ) {
        start === undefined ? start = 0 : start
        end === undefined | end > this.length ? end = this.length : end

        for (let i = start; i < end; i++){
            this[i] = element
        }
        return this
    }
}

console.log('TEST Arroz.prototype.fill')
console.log('CASE fill array with a number between start index to array end')

{
    const cars = new Arroz
    cars[0] = 'Renault'
    cars[1] = 'Tata'
    cars[2] = 'Simca'
    cars[3] = 'Talbot'
    cars[4] = 'Tesla'
    cars.length = 5
    const element = cars.fill('auto', 3)
    console.log(element)
    /* {
            '0': 'Renault',
            '1': 'Tata',
            '2': 'Simca',
            '3': 'auto',
            '4': 'auto',
            length: 5
    }*/
}


// Check to fill array with a string between two array index
console.log('CASE fill array with a string between two array index')

{
    const cars = new Arroz
    cars[0] = 'Renault'
    cars[1] = 'Tata'
    cars[2] = 'Simca'
    cars[3] = 'Talbot'
    cars[4] = 'Tesla'
    cars.length = 5
    const element = cars.fill('auto', 1, 3)
    console.log(element)
    /* {
        '0': 'Renault',
        '1': 'auto',
        '2': 'auto',
        '3': 'Talbot',
        '4': 'Tesla',
        length: 5
    }*/
}

// Check to fill array with a string all array
console.log('CASE fill array with a string all array')
{
    const cars = new Arroz
    cars[0] = 'Renault'
    cars[1] = 'Tata'
    cars[2] = 'Simca'
    cars[3] = 'Talbot'
    cars[4] = 'Tesla'
    cars.length = 5
    const element = cars.fill('auto')
    console.log(element)
    /* {
        '0': 'auto',
        '1': 'auto',
        '2': 'auto',
        '3': 'auto',
        '4': 'auto',
        length: 5
    } */
}