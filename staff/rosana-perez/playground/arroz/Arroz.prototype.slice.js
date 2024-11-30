console.log('TEST Arroz.prototype.slice')

/*El método slice() devuelve una copia de una parte del array dentro de un nuevo array 
empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
valor de retorno: un nuevo array con los valores extraídos.
        sintaxis: arr.slice([inicio [, fin]])
valor inicial: se extrae // valor final: no se extrae, se extrae hasta el inmediato anterior */

//función constructora:

class Arroz {
    constructor() {
        this.length = 0
    }


    slice(start, end) {

        let newArray = []

        if (start === undefined) start = this[0]
        if (start < 0) start = this.length + start 
        if (start > this.length) newArray = []
        if (end === undefined || end > this.length) end = this.length;
        if (end < 0) end = this.length - 1


        for (let i = start; i < end; i++) {

            newArray.push(this[i])

        }
        return newArray
    }
}

const numbers = new Arroz();
numbers[0] = 100
numbers[1] = 200
numbers[2] = 300
numbers[3] = 400
numbers[4] = 500
numbers.length = 5

console.log('CASO 1 -> extraer un array entre las posiciones 1 y 3')

const numbersSliced = numbers.slice(1, 3)

console.log('arroz.slice entre posiciones 1 y 3 de numbers, que serán posiciones 1 y 2 -> ', numbersSliced)
//expected output -> [200, 300]

console.log('CASO 2 -> extraer un array sin posición inicial')
// Si inicio es omitido el valor por defecto de inicio ó start es 0

const numbersNoInitial = numbers.slice(0, 2)

console.log('arroz.slice hasta posición 2 de numbers, sin indicar posición inicial -> ', numbersNoInitial)
//expected output = [100, 200]


console.log('CASO 3 -> extraer un array con inicio mayor a la longitud del arroz')
// Si inicio es mayor a la longitud del array, se devuelve un array vacío

const numbersInitialLength = numbers.slice(6, 9)

console.log('arroz.slice con inicio mayor a la longitud del arroz (6, 9) -> ', numbersInitialLength)
//expected output = []


console.log('CASO 4 -> extracción de array con índice negativo')
// Con un índice negativo, fin indica un desplazamiento desde el final de la secuencia. 
// slice(2,-1) extrae desde el tercer hasta el penúltimo elemento en la secuencia

const numbersNegativeIndex = numbers.slice(2, -1)

console.log('arroz.slice con indice start positivo y indice end negativo (2, -1) -> ', numbersNegativeIndex)
//expected output = [300, 400]


console.log('CASO 5 -> extracción de array con índice end omitido')
// Si fin es omitido, slice extrae hasta el final de la secuencia (arr.length).

const numbersEndLess = numbers.slice(1)

console.log('arroz.slice con indice end omitido -> ', numbersEndLess)
//expected output = [200, 300, 400, 500]


console.log('CASO 6 -> extracción de array con índice end mayor que array.length')
//Si fin es mayor a la longitud del array, slice extrae hasta el final de la secuencia (arr.length).

const numbersMoreLength = numbers.slice(2, 7)

console.log('arroz.slice con indice end mayor que longitud del array (2, 7) -> ', numbersMoreLength)
//expected output = [300, 400, 500]


console.log('CASO 7 -> extraer un array entre las posiciones -3 y 5')
// Si el índice especificado es negativo, indica un desplazamiento desde el final del array.slice(-2) extrae los dos últimos elementos del array

const numbersStartNeg = numbers.slice(-3, 5)

console.log('arroz.slice entre posiciones -3 y 5 de numbers -> ', numbersStartNeg)
//expected output -> [300, 400, 500]
