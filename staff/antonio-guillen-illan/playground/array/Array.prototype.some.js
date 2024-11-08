console.log('TEST Array.prototype.some')

console.log('CASO find exists fruit contains  M')

var fruits = ['banana', 'Mango', 'Fresa', 'Manzana']

var exists = fruits.some(function (fruta) {
    return fruta.includes('M') || fruta.includes('m'); // Verifica si contiene 'M' o 'm'
});

console.log(exists); // Devuelve true si hay una fruta con "M", false si no



console.log('CASE find iphone')

var phones = ['Blackberry', 'Motorola', 'Nokia']

var exists = phones.some(function (phone) {
    if (phones.includes('iPhone')) {
        return true
    } else {
        return false
    }
})
console.log(exists)
//false