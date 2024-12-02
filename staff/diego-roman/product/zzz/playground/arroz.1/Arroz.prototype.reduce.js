Arroz.prototype.reduce = function(callback, initialValue) {
    var accumulator = initialValue;
    for (var i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}

console.log('TEST Arroz.prototype.reduce')

var nums = new Arroz;
nums[0] = 1;
nums[1] = 2;
nums[2] = 3;
nums[3] = 4;
nums.length = 4;

var sum = nums.reduce(function(acc, num) {
    return acc + num;
}, 0);
console.log(sum);
// 10



// ejemplo

Arroz.prototype.reduce = function(callback, initialValue) {
    var accumulator = initialValue;
    for (var i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}

console.log('TEST Arroz.prototype.reduce')

var marcas = new Arroz;
marcas[0] = 'Samsung';
marcas[1] = 'Apple';
marcas[2] = 'Huawei';
marcas[3] = 'Xiaomi';
marcas[4] = 'OnePlus';
marcas.length = 5;

var todasLasMarcas = marcas.reduce(function(acc, marca) {
    return acc + ', ' + marca;
}, '');
console.log(todasLasMarcas);
// 'Samsung, Apple, Huawei, Xiaomi, OnePlus'
