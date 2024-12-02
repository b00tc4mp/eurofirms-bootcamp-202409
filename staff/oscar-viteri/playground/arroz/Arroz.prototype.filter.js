class Arroz {
    constructor() { this.length = 0 }

    filter(callbackfunction) {
        // crear un nuevo arroz
        const result = new Arroz
        // recorrer el objeto para verificar si cada elemento cumple la condicion de la funcion
        for (let i = 0; i < this.length; i++) {
            // devolver el nuevo arroz
            if (callbackfunction(this[i])) {
                result[result.length] = this[i]
                result.length++
            }
        }
        return result
    }
}
const numbers = new Arroz
numbers[0] = 0
numbers[1] = 1
numbers[2] = 2
numbers[3] = 3
numbers[4] = 4
numbers[5] = 5
numbers[6] = 6
numbers.length = 7

const pairnumbers = numbers.filter(function (number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
})
console.log(pairnumbers)