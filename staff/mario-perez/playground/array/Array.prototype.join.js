console.log('TEST Array.prototype.join')

console.log("CASE return a string with all elements of a object")

var arr = [100, 200, 300, 400, 300, 800, 800]
console.log(arr.join())
// "100,200,300,400,300,800,800"

console.log(arr.join(''));
// Expected output: "100200300400300800800"

console.log(arr.join('-'));
// Expected output: "100-200-300-400-300-800-800"