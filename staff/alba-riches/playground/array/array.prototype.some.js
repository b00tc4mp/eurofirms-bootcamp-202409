console.log('TEST Array.prototype.some');

// Caso 1: Verificar si algún elemento es mayor que 250 y menor que 412
console.log("CASE some element is more than 250 and less than 412");
const nums = [100, 200, 300, 400, 300, 800, 800];

// Función de comprobación
const checkMoreThan250AndLessThan412 = function (element) {
    return element > 250 && element < 412;
};

console.log(nums.some(checkMoreThan250AndLessThan412)); // true

// Caso 2: Verificar si algún elemento es mayor que 801
console.log("CASE element is more than 801");
const nums2 = [100, 200, 300, 400, 300, 800, 800];

// Función de comprobación
const checkMoreThan801 = function (element) {
    return element > 801;
};

console.log(nums2.some(checkMoreThan801)); // false

// Caso 3: Verificar si existe alguna fruta con la letra M o m
console.log('CASE find if exist fruits with the letter M or m');
const fruits = ['Banana', 'Mango', 'Piña', 'Fresa', 'Manzana'];

const existsFruitsWithM = fruits.some(function (fruit) {
    return fruit.includes('M') || fruit.includes('m');
});

console.log(existsFruitsWithM); // true

// Caso 4: Verificar si existe un teléfono Nokia
console.log('CASE find Nokia');
const phones = [
    { brand: 'Blackberry', color: 'black', type: 'phone' },
    { brand: 'Motorola', color: 'white', type: 'phone' },
    { brand: 'Nokia', color: 'red', type: 'phone' },
    { brand: 'iphone', color: 'pink', type: 'smartphone' }
];

const existsNokia = phones.some(function (phone) {
    return phone.brand === 'Nokia';
});

console.log(existsNokia); // true

// Caso 5: Verificar si existe un smartphone en la lista de teléfonos
console.log('CASE check if smartphone exists in phones');
const existsSmartphone = phones.some(function (phone) {
    return phone.type === 'smartphone';
});

console.log(existsSmartphone); // true
