class Arroz {
    constructor() { this.length = 0 }

    filter(callbackFunction) {

        // crear un nuevo arroz
        const result = new Arroz();
        // recorrer el objeto para verificar si cada elemento cumple la condición de la funcion
        for (let i = 0; i < this.length; i++) {
            if (callbackFunction(this[i])) {
                result[result.length] = this[i]
                result.length++
            }
        }
        // devolver el nuevo arroz
        return result

    }
}



const numbers = new Arroz();
numbers[0] = 0
numbers[1] = 1
numbers[2] = 2
numbers[3] = 3
numbers[4] = 4
numbers[5] = 5
numbers[6] = 6
numbers.length = 7

console.log('CASE 1: Discover pair numbers')

const pairnumbers = numbers.filter(function (number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
})

console.log(pairnumbers)