
// ARROZ.PROTOTYTPE.SLICE


// Implementation of the Arroz function slice,
// returns a portion of an array into a new array

class Arroz {
    constructor() { 
        this.length = 0 
    }

    slice( start, end ) {
        let new_array = []
        if ( start < 0 ) {
            for (let i = this.length + start; i < this.length; i++ ) {
                new_array.push(this[i])
            }
            return new_array
        }else{
            console.log('Por allá')
            end === undefined || end > this.length ? end = this.length : end
            for (let i = start; i < end; i++ ){
                new_array.push(this[i])
            }
            return new_array
        }
    }
}

    console.log('TEST Arroz.prototype.slice')
    
{
    console.log('CASE returns a portion of an array into a new array between start and end')

    const cars = new Arroz
    cars[0] = 'Renault'
    cars[1] = 'Talbot'
    cars[2] = 'Ford'
    cars[3] = 'Seat'
    cars[4] = 'Skoda'
    cars[5] = 'Daewo'
    cars[6] = 'Mercedes'
    cars[7] = 'Toyota'
    cars.length = 8

    const element = cars.slice(1, 4)
    console.log(element)
    // [ 'Talbot', 'Ford', 'Seat' ]
}

{
    console.log('CASE returns a potion of an array into a new array starting by end')

    const cars = new Arroz
    cars[0] = 'Renault'
    cars[1] = 'Talbot'
    cars[2] = 'Ford'
    cars[3] = 'Seat'
    cars[4] = 'Skoda'
    cars[5] = 'Daewo'
    cars[6] = 'Mercedes'
    cars[7] = 'Toyota'
    cars.length = 8

    const element = cars.slice(-3)
    console.log(element)
    // [ 'Daewo', 'Mercedes', 'Toyota' ]
}
