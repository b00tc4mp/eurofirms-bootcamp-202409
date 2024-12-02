console.log('TEST Array.prototype.fill')

console.log("CASE element is 8")

var arr = [100, 200, 300, 400, 300, 800, 800]

console.log(arr.fill(8))
// [8, 8, 8, 8, 8, 8, 8]

console.log("CASE element is 8")

var arr = [100, 200, 300, 400, 300, 800, 800]

console.log(arr.fill(300, 2, 5))
// [100, 200, 300, 300, 300, 800, 800]
