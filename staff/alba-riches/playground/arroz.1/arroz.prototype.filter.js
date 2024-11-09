// Constructor de la clase Arroz
const Arroz = function () {
    this.length = 0; // Inicia la longitud del "arroz" en 0
};

// Método 'filter' en el prototipo de Arroz
Arroz.prototype.filter = function (callbackFunction) {
    const result = new Arroz();  // Crear un nuevo "arroz" vacío

    // Recorrer el objeto 'this' (el arreglo original)
    for (let i = 0; i < this.length; i++) {
        // Verificar si el elemento cumple la condición del callback
        if (callbackFunction(this[i])) {
            // Si cumple, añadir el elemento al nuevo arreglo 'result'
            result[result.length] = this[i];
            result.length++;  // Aumentar la longitud del nuevo arreglo
        }
    }
    return result;  // Devolver el nuevo arreglo con los elementos filtrados
};

// Crear un arreglo de números
const numbers = new Arroz();
numbers[0] = 4;
numbers[1] = 10;
numbers[2] = 17;
numbers[3] = 24;
numbers[4] = 32;
numbers[5] = 41;
numbers[6] = 51;
numbers[7] = 62;
numbers[8] = 74;
numbers[9] = 86;
numbers[10] = 99;
numbers.length = 11;

console.log('CASE: Discover numbers divisible by 3');

// Filtrar los números divisibles entre 3
const divisibleByThree = numbers.filter(function (number) {
    return number % 3 === 0;  // Filtra los números que son divisibles por 3
});

console.log(divisibleByThree);
// Resultado esperado: {0: 24, 1: 51, 2: 99, length: 3}


console.log('CASE: Discover numbers that contain the digit 4');

// Filtrar los números que contienen el dígito "4"
const numbersWithFour = numbers.filter(function (number) {
    return number.toString().includes('4');  // Verifica si el número contiene un "4"
});

console.log(numbersWithFour);
// Resultado esperado: {0: 4, 24, 41, 74, length: 4}
