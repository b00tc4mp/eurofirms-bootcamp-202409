// Constructor Arroz, que simula el comportamiento de un array
const Arroz = function () { 
    this.length = 0; // Inicializa la propiedad length
};

// Método map para el constructor Arroz
Arroz.prototype.map = function (callBackFunction) {
    // Crear un arreglo 'result' para almacenar los valores resultantes
    const result = new Arroz();  // Usamos 'new Arroz' para simular un nuevo array

    // Recorrer cada elemento del arreglo original (el que invoca el método)
    for (let i = 0; i < this.length; i++) {
        // Llamamos a la función de callback para procesar el elemento y lo almacenamos en 'result'
        result[result.length] = callBackFunction(this[i], i, this); 
        result.length++;  // Aumentamos la longitud del nuevo arreglo
    }
    
    // Devolvemos el nuevo arreglo con los resultados
    return result;
};

// Test de los casos de uso con el constructor Arroz

console.log('TEST Arroz.prototype.map');
console.log('CASE add 6 to each of numbers');

const numbers = new Arroz();
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers.length = 4;  // Establecemos la longitud del arreglo

const callBackFunction = function (element) {
    return element + 6;  // Sumamos 6 a cada elemento
};

// Aplicamos el método map
const result = numbers.map(callBackFunction);
console.log(result);  // Esperado: Arroz { 0: 16, 1: 26, 2: 36, 3: 46, length: 4 }


console.log('TEST Arroz.prototype.map');
console.log('CASE multiply each number by 3');

const numbers2 = new Arroz();
numbers2[0] = 10;
numbers2[1] = 20;
numbers2[2] = 30;
numbers2[3] = 40;
numbers2.length = 4;  // Establecemos la longitud del arreglo

const callBackFunction2 = function (element) {
    return element * 3;  // Multiplicamos cada elemento por 3
};

// Aplicamos el método map
const result2 = numbers2.map(callBackFunction2);
console.log(result2);  // Esperado: Arroz { 0: 30, 1: 60, 2: 90, 3: 120, length: 4 }
