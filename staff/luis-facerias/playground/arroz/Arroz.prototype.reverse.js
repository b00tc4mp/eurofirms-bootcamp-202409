// ARROZ.PROTOTYTPE.REVERSE


// Implementation of the Arroz function reverse,
// returns an array with elements in reverse order

class Arroz {
    constructor() { 
        this.length = 0 
    }

    reverse() {
        const reversed = []
        for (let i = 0; i < this.length; i++){
            this[i].length === 0 ? this[i] = '<1 empty item>': this[i]
            reversed[this.length - 1 - i] = this[i]
        }
        return reversed
    }
}

console.log('TEST Arroz.prototype.reverse')

{
    console.log('CASE returns an array with elements in reverse order')

    const cars = new Arroz
    cars[0] = 'Renault'
    cars[1] = 'Tata'
    cars[2] = 'Simca'
    cars[3] = 'Talbot'
    cars[4] = 'Tesla'
    cars.length = 5
    const element = cars.reverse()
    console.log(element)
    //[ 'Tesla', 'Talbot', 'Simca', 'Tata', 'Renault' ]
}

{
    console.log('CASE returns an reversed array with some empty elements')

    const cars = new Arroz
    cars[0] = 'Renault'
    cars[1] = 'Tata'
    cars[2] = 'Simca'
    cars[3] = ''
    cars[4] = 'Tesla'
    cars.length = 5
    const element = cars.reverse()
    console.log(element)
    //[ 'Tesla', '<1 empty item>', 'Simca', 'Tata', 'Renault' ]
}