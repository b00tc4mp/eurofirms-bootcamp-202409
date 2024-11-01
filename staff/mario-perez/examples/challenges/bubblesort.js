/* La ordenación de burbuja compara el elemento desde el índice 0
 - si el valor del índice 0 es mayor que el valor del índice 1, los valores se intercambian 
 - si el valor del índice 0 es menor que el valor del índice 1, no sucede nada.

A continuación, el primer valor de índice se compara con el segundo valor de índice, 
y luego el segundo valor de índice se compara con el tercer valor de índice, y así sucesivamente...
*/

var array = [1, 4, 2, 5, -2, 3]

console.log(array)

function bubbleSort(array) {
    var aux;
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                aux = array[i];
                array[i] = array[j]
                array[j] = aux;
            }
        }
        console.log("Al finalizar esta comparación, el resultado es", array)
    }
    return array;
}

console.log(bubbleSort(array))


console.log("CASE using recursivity")

var array2 = [5, 4, -1, 1, -20, 300]

function bubbleSortRecursivity(array) {
    var aux
    for (var i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            aux = array[i];
            array[i] = array[i + 1]
            array[i + 1] = aux;
            bubbleSortRecursivity(array)
        }
    }
    return array
}

console.log(bubbleSortRecursivity(array2))