console.log('TEST Array.prototype.map')

console.log('CASE double the numbers')

var nums = [1, 2, 3, 4];
var doubledNums = nums.map(function(num) {
    return num * 2;
});
console.log(doubledNums);
// [2, 4, 6, 8]


// ejemplo

console.log('TEST Array.prototype.map')

console.log('CASE convert brands to uppercase')

var marcas = ['Samsung', 'Apple', 'Huawei', 'Xiaomi', 'OnePlus'];
var marcasMayusculas = marcas.map(function(marca) {
    return marca.toUpperCase();  // Convertir a mayúsculas
});
console.log(marcasMayusculas);
// ['SAMSUNG', 'APPLE', 'HUAWEI', 'XIAOMI', 'ONEPLUS']
