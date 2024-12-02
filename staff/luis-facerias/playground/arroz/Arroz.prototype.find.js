// ARROZ.PROTOTYPE.FIND

// Implementation of the Arroz function find
// returns the first result of a conditional search function

class Arroz {
    constructor() {
        this.length = 0 
    }

    find(callback) {
        for (let i = 0; i < this.length; i++){
            const element = this[i]

            //const carFound = callback(element)

            //if (carFound) return element

            if (callback(element)) return element    // If the function returns true, the loop stops and returns the element
        }
    }
}

// Check if find returns the first result of a conditional search
console.log('CASE returns the first result of a conditional search')
{
    const cars = new Arroz
    cars[0] = 'Renault'
    cars[1] = 'Talbot'
    cars[2] = 'Ford'
    cars[3] = 'Seat'
    cars[4] = 'Skoda'
    cars[5] = 'Daewo'
    cars[6] = 'Toyota'
    cars.length = 7
    const car = cars.find(function (car) {
        return car.startsWith('S')
    })
    console.log(car)
    // Seat
}

{
    console.log('CASE returns the first result of car with k its name')
    const cars = new Arroz
    cars[0] = 'Renault'
    cars[1] = 'Talbot'
    cars[2] = 'Ford'
    cars[3] = 'Seat'
    cars[4] = 'Skoda'
    cars[5] = 'Daewo'
    cars[6] = 'Toyota'
    cars.length = 7
    const car = cars.find(function (car) {
        return car.includes('k')
    })
    console.log(car)
    // Skoda
}