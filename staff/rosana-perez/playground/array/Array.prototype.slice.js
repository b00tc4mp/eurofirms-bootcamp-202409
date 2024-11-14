console.log('TEST Array.prototype.slice')

/*El método slice() devuelve una copia de una parte del array dentro de un nuevo array 
empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
valor de retorno: un nuevo array con los valores extraídos.
        sintaxis: arr.slice([inicio [, fin]])
valor inicial: se extrae // valor final: no se extrae, se extrae hasta el inmediato anterior */

const numbers = [100, 200, 300, 400, 500]
console.log('array numbers -> ', numbers)

console.log('CASO 1 -> extraer un array entre las posiciones 1 y 3')
const numbersSliced = numbers.slice(1, 3)
//expected output = [200, 300]


console.log('array.slice entre posiciones 1 y 3 de numbers, que serán posiciones 1 y 2 -> ', numbersSliced)


console.log('CASO 2 -> extraer un array.slice sin posición inicial')
// Si inicio es omitido el valor por defecto de inicio ó start es 0

const numbersNoInitial = numbers.slice(0, 2)

console.log('array.slice hasta posición 2 de numbers, sin indicar posición inicial -> ', numbersNoInitial)
//expected output = [100, 200]


console.log('CASO 3 -> extraer un array.slice con inicio mayor a la longitud del array')
// Si inicio es mayor a la longitud del array, se devuelve un array vacío

const numbersInitialLength = numbers.slice(6, 9)

console.log('array.slice con inicio mayor a la longitud del array (6, 9) -> ', numbersInitialLength)
//expected output = []


console.log('CASO 4 -> extracción de array.slice con índice negativo')
// Con un índice negativo, fin indica un desplazamiento desde el final de la secuencia. 
// slice(2,-1) extrae desde el tercer hasta el penúltimo elemento en la secuencia

const numbersNegativeIndex = numbers.slice(2, -1)

console.log('array.slice con indice start positivo y indice end negativo (2, -1) -> ', numbersNegativeIndex)
//expected output = [300, 400]


console.log('CASO 5 -> extracción de array.slice con índice end omitido')
// Si fin es omitido, slice extrae hasta el final de la secuencia (arr.length).

const numbersEndLess = numbers.slice(1)

console.log('array.slice con indice end omitido -> ', numbersEndLess)
//expected output = [200, 300, 400, 500]


console.log('CASO 6 -> extracción de array.slice con índice end mayor que array.length')
//Si fin es mayor a la longitud del array, slice extrae hasta el final de la secuencia (arr.length).

const numbersMoreLength = numbers.slice(2, 7)

console.log('array.slice con indice end mayor que longitud del array (2, 7) -> ', numbersMoreLength)
//expected output = [300, 400, 500]
