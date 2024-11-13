console.log('TEST Arroz.prototype.reduce')

// El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

class Arroz {
    constructor() {
        this.length = 0
    }
reduce(callbackFunction, initialValue) {
   if (initialValue !== undefined) {
    // el valor inicial es initialValue y se aplica
    // la función callback desde el 1º elemento
        let accumulator = initialValue
        for ( let i =0; i<this.length; i++ ) {
            const currentValue = this[i]
          accumulator =  callbackFunction(accumulator, currentValue) 
        }

        return accumulator

    //no aplicamos la funcion  callback desde el 1º eleme
   }else {
        let accumulator = this[0]
        for (let i= 1; i<this.length; i++) {
            const currentValue = this[i]
            accumulator = callbackFunction(accumulator,  currentValue)
        }
        return accumulator
   }

}
    
/* variable inicial
 verificar si existe valor inicial
 sumar o acumular cada valor -> currentValue
 devolver el objeto reducido

*/ 

}

const numbers = new Arroz;
numbers[0]= 100
numbers[1]= 200
numbers[2]= 300
numbers[3]= 400
numbers[4]= 500
numbers.length = 5;


console.log('CASO1  --> suma todos los elementos con el valor inicial  100')

let initialValue = 100
const caso1 = numbers.reduce(function(accumulator,currentValue){ return accumulator + currentValue},initialValue)

console.log('resultado del caso 1 --> ',caso1)
//1600


console.log('CASO 2 --> suma todos los elementos sin el valor inicial')



const caso2 = numbers.reduce(function(accumulator, currentValue) {return accumulator+currentValue})

console.log('resultado del caso 2 --> ', caso2)
//1500

console.log('CASO 3.- método reduce con letras')

const letras = new Arroz
letras[0] ='A'
letras[1] ='B'
letras[2] ='C'
letras[3] ='D'
letras[4] ='E'
letras.length = 5

const initialValueLetras = 'Z'

const caso3 = letras.reduce(function(accumulator, currentValue) {return accumulator+currentValue}, initialValueLetras)

console.log('resultado del caso 3 --> ', caso3)