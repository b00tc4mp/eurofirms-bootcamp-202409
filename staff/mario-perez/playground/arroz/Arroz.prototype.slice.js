//revisar y preguntar el último caso: no existe en la documentación

console.log('TEST Array.prototype.slice')

console.log("CASE start position is 0 and end position is 6")

var arr = [100, 200, 300, 400, 300, 800, 800]

console.log(arr.slice(0, 6))
// [100, 200, 300, 400, 300, 800]

console.log("CASE start position is 2 and end position is -3")

var arr = [100, 200, 300, 400, 300, 800, 800]

console.log(arr.slice(2, -3))
// [300, 400]

console.log("CASE start position is -2 and end position is 5")

var arr = [100, 200, 300, 400, 300, 800, 800]

console.log(arr.slice(-2, 5))
// []






