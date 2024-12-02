// ARROZ.PROTOTYTPE.SOME


// Implementation of the Arroz function filter,
// returns a portion from given array filtered by function condition

class Arroz {
    constructor() {
        this.length = 0
    }

    filter(callback) {
        const result = []
        for (let i = 0; i < this.length; i++){
            let element = this[i]

            result[i] = callback(element)
        }
    }
}

{
    const cars = ['Renault', 'Talbot', 'Ford', 'Seat', 'Skoda', 'Daewo', 'Toyota']

    console.log('CASE returns cars with k in car name')
    const result = cars.filter((car) => car.includes('k'))
    console.log(result)
    // [ 'Skoda' ]
}

{
    const cars = ['Renault', 'Talbot', 'Ford', 'Seat', 'Skoda', 'Daewo', 'Toyota']

    console.log('CASE returns cars with more than 5 chars')
    const result = cars.filter((car) => car.length > 5)
    console.log(result)
    // [ 'Renault', 'Talbot', 'Toyota' ]
}