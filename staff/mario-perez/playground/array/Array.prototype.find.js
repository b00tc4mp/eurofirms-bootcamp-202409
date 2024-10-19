// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

console.log('TEST Array.prototype.find')

console.log("CASE element is more than 250 and less than 412")

var arr = [100, 200, 300, 400, 300, 800, 800]

//function

var callBackFunction = function (element) {
    return element > 250 && element < 412
}

console.log(arr.find(callBackFunction))
// 300