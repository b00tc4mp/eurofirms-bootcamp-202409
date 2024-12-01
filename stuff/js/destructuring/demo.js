var n = [1, 2]

// no destructuring
var x = n[0]
var y = n[1]
console.log(x, y)
// 1 2

// object destructuring
var { 0: x, 1: y } = n
console.log(x, y)
// 1 2

// array destructuring
var [x, y] = n
undefined
console.log(x, y)
// 1 2