// Definir el array de números
let numbers = [0, 1, 2, 3, 4, 5, 6];

// Filtrar los números pares
let pairnumbers = numbers.filter(function (number) {
    return number % 2 === 0;  // Retorna true solo para los números pares
});
console.log('CASE 1: Discover pairnumbers', pairnumbers);  // Esperado: [0, 2, 4, 6]

// Filtrar los números divisibles por 3, excluyendo el 0
let numbersmore3 = numbers.filter(function (number) {
    return number % 3 === 0 && number !== 0;  // Filtra números divisibles por 3 y excluye el 0
});
console.log('CASE 2: Discover numbers divided in three', numbersmore3);  // Esperado: [3, 6]

// Caso 3: Filtrar números mayores a 10
let numbersHigher10 = [0, 9, 10, 11, 12];
let numbersHigherThan10 = numbersHigher10.filter(function (number) {
    return number > 10;  // Filtra solo los números mayores a 10
});
console.log('CASE 3: Discover numbers higher than 10', numbersHigherThan10);  // Esperado: [11, 12]

// Caso 4: Filtrar números divisibles por 5
let numbersdivided5 = [0, 1, 2, 3, 4, 5, 10];
let numbersDividedBy5 = numbersdivided5.filter(function (number) {
    return number % 5 === 0;  // Filtra números divisibles por 5
});
console.log('CASE 4: Discover numbers divided in 5', numbersDividedBy5);  // Esperado: [0, 5, 10]

// Caso 5: Filtrar números divisibles por 3
let numbersdivided3 = [0, 1, 2, 3, 4, 5, 6];
let numbersDividedBy3 = numbersdivided3.filter(function (number) {
    return number % 3 === 0;  // Filtra números divisibles por 3
});
console.log('CASE 5: Discover numbers divided in 3', numbersDividedBy3);  // Esperado: [0, 3, 6]
