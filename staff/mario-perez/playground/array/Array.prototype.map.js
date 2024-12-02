/*
El método map() crea un nuevo array con los resultados 
de la llamada a la función indicada aplicados a cada elemento.
*/

console.log('TEST Array.prototype.map')

console.log("CASE add 60 to each element of numbers")

var numbers = [100, 200, 300, 400, 300, 800, 800]

//function

var callBackFunction = function (element) {
    return element + 60
}

console.log(numbers.map(callBackFunction))
// [160, 260, 360, 460, 360, 860, 860]

console.log("CASE add 60 to each element of numbers. One element is negative")

var numbers = [100, -30, 300, 400, 300, 800, 800]

//function

var callBackFunction = function (element) {
    return element + 60
}

console.log(numbers.map(callBackFunction))
// [160, 30, 360, 460, 360, 860, 860]