Arroz.prototype.map = function(callback) {
    var result = new Arroz;
    for (var i = 0; i < this.length; i++) {
        result[result.length] = callback(this[i], i, this);
        result.length++;
    }
    return result;
}

console.log('TEST Arroz.prototype.map')

var nums = new Arroz;
nums[0] = 1;
nums[1] = 2;
nums[2] = 3;
nums[3] = 4;
nums.length = 4;

var doubledNums = nums.map(function(num) {
    return num * 2;
});
console.log(doubledNums);
// Arroz { 0: 2, 1: 4, 2: 6, 3: 8, length: 4 }


// ejemplo

Arroz.prototype.map = function(callback) {
    var result = new Arroz;
    for (var i = 0; i < this.length; i++) {
        result[result.length] = callback(this[i], i, this);
        result.length++;
    }
    return result;
}

console.log('TEST Arroz.prototype.map')

var marcas = new Arroz;
marcas[0] = 'Samsung';
marcas[1] = 'Apple';
marcas[2] = 'Huawei';
marcas[3] = 'Xiaomi';
marcas[4] = 'OnePlus';
marcas.length = 5;

var marcasMayusculas = marcas.map(function(marca) {
    return marca.toUpperCase();
});
console.log(marcasMayusculas);
// Arroz { 0: 'SAMSUNG', 1: 'APPLE', 2: 'HUAWEI', 3: 'XIAOMI', 4: 'ONEPLUS', length: 5 }


