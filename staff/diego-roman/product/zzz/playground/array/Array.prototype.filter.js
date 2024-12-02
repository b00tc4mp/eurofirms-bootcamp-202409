console.log('TEST Array.prototype.filter')

console.log('CASE filter out vegetables that contain "a"')

var vegetables = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
var filteredVegetables = vegetables.filter(function(veg) {
    return veg.includes('a');
});
console.log(filteredVegetables);
// ['cauliflower', 'cabbage', 'kale', 'tomato']


// ejemplo

console.log('TEST Array.prototype.filter')

console.log('CASE filter brands with more than 6 letters')

var marcas = ['Samsung', 'Apple', 'Huawei', 'Xiaomi', 'OnePlus'];
var marcasLargas = marcas.filter(function(marca) {
    return marca.length > 6;  // Marcas con más de 6 letras
});
console.log(marcasLargas);
// ['Samsung', 'Huawei', 'OnePlus']


