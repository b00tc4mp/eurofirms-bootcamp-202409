/*
function array.push()
añade en la ultima posicion del array un elemento

*/
function addElement(object, element) {
    // muestra funcion añadira dentro del objeto -> 
    object < - en la ultima posicion -> objeto.lenght < -
        el elemento -> element < -
            object[object.length] =  element
    //incrementar la longitud -> object.lenght <- en 
    1
    object.lenght++
}
var number = {
    0: 0,
    1: 1,
    2: 2,
    lenght: 3
}

console.log("PRUEBA 1 : añadir el numero 3 a numbers")

addElement(numbers, 3)

console.log("Resultado esperado -> { 0:0, 1:1, 2:2, 3:3 , lenght:4})")

addElement(numbers, 100)

console.log("numbers", numbers)
