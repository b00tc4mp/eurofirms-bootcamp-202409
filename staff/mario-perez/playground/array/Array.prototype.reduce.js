/*
El método reduce() ejecuta una función reductora 
sobre cada elemento de un array, 
devolviendo como resultado un único valor.

Recoge como parámetros el acumulador y el valor actual, 
y devuelve el acumulador
*/


console.log('TEST Array.prototype.reduce')

console.log("CASE 3 elements with inicial value is 1")

var numbers = [100, 200, 300]

console.log(numbers.reduce(
    function (acumulator, element) { return acumulator + element },
    1
))

// 601