console.log('TEST Arroz.prototype.map')

/*
El método map() crea un nuevo array con los resultados de la llamada 
a la función indicada aplicados a cada uno de sus elementos.
Map no modifica el array original.
*/
class Arroz {
    constructor() { this.length = 0 }

    map(callbackFunction) {
        // crear un array -> result
        let result = []
        // recorrer cada elemento del objeto y aplicar la callbackFunction
        for (let i = 0; i < this.length; i++) {
            // por cada elemento añadir a result el valor retornado por callbackFunction
            result[result.length] = callbackFunction(this[i])
        }
        //devuelve el nuevo array -> result
        return result
    }
}

const numbers = new Arroz();
numbers[0] = 1
numbers[1] = 2
numbers[2] = 3
numbers[3] = 4
numbers[4] = 5
numbers[5] = 6
numbers.length = 6


console.log('CASE 1 -> multiply numbers by 2')
{
    const doubles = numbers.map(function (multiply2) {
        return multiply2 * 2
    })

    console.log('Numbers are -> ', numbers)
    // Numbers are Arroz {'0':1, '1':2, '2':3, '3':4, '4':5, '5':6, length: 6]

    console.log('Double numbers are -> ', doubles);
    // Double numbers are [2, 4, 6, 8, 10, 12]
}

console.log('CASE 2 -> substract -2 from numbers')
{
    const substract2 = numbers.map(function (substractFunction) {
        return substractFunction - 2;
    })

    console.log('Numbers with -2 substracted are -> ', substract2)
    // Numbers with -2 substracted are [-1, 0, 1, 2, 3, 4]
}

console.log('CASE 3 -> split numbers by 100')
{
    const splitBy100 = numbers.map(function (divide) {
        return divide / 100;
    })

    console.log('Numbers divided by 100 are -> ', splitBy100)
    // Numbers divided by 100 are -> [0.01, 0.02, 0.03, 0.04, 0.05, 0.06]
}

console.log('CASE 3 -> split numbers by -100')
{
    const splitByLess100 = numbers.map(function (divide) {
        return divide / -100;
    })

    console.log('Numbers divided by -100 are -> ', splitByLess100)
    // Numbers divided by -100 are -> [-0.01, -0.02, -0.03, -0.04, -0.05, -0.06]
}