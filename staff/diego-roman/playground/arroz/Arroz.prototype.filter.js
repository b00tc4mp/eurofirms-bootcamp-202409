Arroz.prototype.filter = function(callback) {
    var result = new Arroz;
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result[result.length] = this[i];
            result.length++;
        }
    }
    return result;
}

console.log('TEST Arroz.prototype.filter')

var vegetables = new Arroz;
vegetables[0] = 'broccoli';
vegetables[1] = 'cauliflower';
vegetables[2] = 'cabbage';
vegetables[3] = 'kale';
vegetables[4] = 'tomato';
vegetables.length = 5;

var filteredVegetables = vegetables.filter(function(veg) {
    return veg.includes('a');
});
console.log(filteredVegetables);
// Arroz { 0: 'cauliflower', 1: 'cabbage', 2: 'kale', 3: 'tomato', length: 4 }


// ejemplo

Arroz.prototype.filter = function(callback) {
    var result = new Arroz;
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result[result.length] = this[i];
            result.length++;
        }
    }
    return result;
}

console.log('TEST Arroz.prototype.filter')

var marcas = new Arroz;
marcas[0] = 'Samsung';
marcas[1] = 'Apple';
marcas[2] = 'Huawei';
marcas[3] = 'Xiaomi';
marcas[4] = 'OnePlus';
marcas.length = 5;

var marcasLargas = marcas.filter(function(marca) {
    return marca.length > 6;
});
console.log(marcasLargas);
// Arroz { 0: 'Samsung', 1: 'Huawei', 2: 'OnePlus', length: 3 }

