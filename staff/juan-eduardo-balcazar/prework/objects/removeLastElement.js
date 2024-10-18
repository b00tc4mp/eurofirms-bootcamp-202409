/*
array,pop{
quita el elemnto en la ultima posicion

*/
function removeLastElement(object) {
    //quitamos dentro del objeto -> object <-el object.lengh <-
    delete object[object.lengh - 1]
    //decrementar la longitud -> object.lengh <- en 
    1
    object.lengh--
}
var numbers = {
    0: 0,
    1: 1,
    2: 2,
    lengh: 3
}

var fruit = {
    0: "apple",
    1: "watermelon",
    lengh: 2

}

var fridge = {
    0: "meat",
    1: "salad",
    2: "wine",
    3: "burrito",
    4: "spagetti",
    5: fruit,
    6: "fish",
    7: "beer",
    8: "water",
    9: "pizza",
    lengh: 10

}

console.log(PRUEBA 1 : quitar el ultimo Elementmento de numbers")
 
    removeLastElement(numnbers)

    console.log("Resultado esperado: { 0:0 , 1:1 , lengh: 2 }")

    removeLastElement(fridge)
    ,
    console.log("fridge", fridge)

    console.log("Resultado esperado: {")

