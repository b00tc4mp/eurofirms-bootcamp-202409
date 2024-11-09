// Definición del constructor Arroz
const Arroz = function () {
    this.length = 0;
};

// Implementamos el método 'some' en el prototipo de Arroz
Arroz.prototype.some = function (callbackFunction) {
    for (let i = 0; i < this.length; i++) {
        if (callbackFunction(this[i])) {
            return true;
        }
    }
    return false;
};

console.log('TEST Arroz.prototype.some');

// Caso 1: Verificar si algún elemento es menor que 10
console.log("CASE element is less than 10");
const nums1 = [10, 15, 20, 25, 30, 35, 40, 45, 50];

// Función de comprobación
const checkLessThan10 = function (element) {
    return element < 10;
};

console.log(nums1.some(checkLessThan10)); // false

// Caso 2: Verificar si algún elemento está entre 25 y 50
console.log("CASE element is between 25 and 50");
const nums2 = [10, 15, 20, 25, 30, 35, 40, 45, 50];

// Función de comprobación
const checkBetween25And50 = function (element) {
    return element >= 25 && element <= 50;
};

console.log(nums2.some(checkBetween25And50)); // true

console.log('TEST Arroz.prototype.some');

// Caso 3: Verificar si existe el elemento 'limon' en la lista de frutas
console.log("CASE element is lemon");
const frutas1 = ['albaricoque', 'naranja', 'limon', 'pomelo', 'mandarina'];

// Función de comprobación
const checkLimon = function (element) {
    return element === 'limon';
};

console.log(frutas1.some(checkLimon)); // true

// Caso 4: Verificar si existe el elemento 'nispero' en la lista de frutas
console.log("CASE element is nispero");
const frutas2 = ['albaricoque', 'naranja', 'limon', 'pomelo', 'mandarina'];

// Función de comprobación
const checkNispero = function (element) {
    return element === 'nispero';
};

console.log(frutas2.some(checkNispero)); // false
