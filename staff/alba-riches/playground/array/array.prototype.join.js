console.log('TEST Array.prototype.join');

console.log("CASE without parameters");
// El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

var arr = ['20', '30', '40', '50', '60', '70', '80'];
console.log(arr.join());
// Output: "20,30,40,50,60,70,80"

console.log("CASE with a '' parameter");

var arr = [20, 30, 40, 50, 60, 70, 80];

console.log(arr.join(''));
// Expected output: "20304050607080"

console.log("CASE with a '-' parameter");

var arr = [100, 200, 300, 400, 500, 600, 700];

console.log(arr.join('-'));
// Expected output: "100-200-300-400-500-600-700"
