Array.prototype.map()

/* El método 'map' crea un nuevo array con los resultados de 
la llamada a la función iniciada aplicados a cadauno de sus elementos */

console.log('TEST Array.prototype.map')

console.log('CASE add 5 to each of numbers')

var numbers = [10, 20, 30, 40]

var callBackFunction = function (element) {
    return element + 5
}

console.log(numbers.map(callBackFunction))

console.log(function() { return 'funcion parametro'})

// 15, 25, 35, 45





