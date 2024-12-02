console.log('TEST Array.prototype.reduce')

console.log('CASE sum all numbers')

var nums = [1, 2, 3, 4];
var sum = nums.reduce(function(acc, num) {
    return acc + num;
}, 0);
console.log(sum);
// 10


// ejemplo

console.log('TEST Array.prototype.reduce')

console.log('CASE concatenate all brands')

var marcas = ['Samsung', 'Apple', 'Huawei', 'Xiaomi', 'OnePlus'];
var todasLasMarcas = marcas.reduce(function(acc, marca) {
    return acc + ', ' + marca;
});
console.log(todasLasMarcas);
// 'Samsung, Apple, Huawei, Xiaomi, OnePlus'
