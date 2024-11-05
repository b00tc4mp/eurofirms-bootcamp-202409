// El método 'map' crea un nuevo array con los resultados de la llamada a la función aplicada a cada uno de sus elementos

console.log('TEST Array.prototype.map');

console.log('CASE add 5 to each of numbers');

const numbers = [10, 20, 30, 40]; // Usamos const ya que el arreglo no se reasigna

// Definimos la función callback que suma 5 a cada elemento
const callBackFunction = function (element) {
    return element + 5;
};

// Usamos map para aplicar la función callback a cada elemento del arreglo numbers
const result = numbers.map(callBackFunction);

console.log(result);
// Resultado esperado: [15, 25, 35, 45]

// Agregar un ejemplo adicional de una función anónima directa

console.log('CASE add 5 to each of numbers using an anonymous function');

const result2 = numbers.map(function (element) {
    return element + 5;
});

console.log(result2);
// Resultado esperado: [15, 25, 35, 45]

