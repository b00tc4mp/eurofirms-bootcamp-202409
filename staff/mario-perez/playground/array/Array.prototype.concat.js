console.log('TEST Array.prototype.concat')

console.log("CASE arrays")

var arr = [100, 200, 300, 400, 300, 800, 800]
var arr2 = [1000, 120]
var arr3 = ["abcde", "fghij", "kl'll'mn", "ñopqr", "stuv", "wxyz"]

console.log(arr.concat(arr2))
// [100, 200, 300, 400, 300, 800, 800, 1000, 120] (9)

console.log(arr.concat(arr3))
// [100, 200, 300, 400, 300, 800, 800, "abcde", "fghij", "kl'll'mn", "ñopqr", "stuv" , "wxyz"]

console.log(arr.concat(arr2).concat((arr.concat(arr3))))
// [100, 200, 300, 400, 300, 800, 800, 1000, 120, 100, 200, 300, 400, 300, 800, 800
// , "abcde", "fghij", "kl'll'mn", "ñopqr", "stuv" , "wxyz"]