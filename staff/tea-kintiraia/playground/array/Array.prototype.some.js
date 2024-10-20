Array.prototype.some 

/* El método some() comprueba si al menos un elemento del array 
cumple con la condición implementada por la función proporcionada. */

var food = ["vegetable", "meat", "cheese", "fruits"];

function checkAvailability(arr, val) {
    return arr.some((arrVal) => val === arrVal);
}

checkAvailability(food, "cheese"); // true
checkAvailability(food, "fish"); // false
