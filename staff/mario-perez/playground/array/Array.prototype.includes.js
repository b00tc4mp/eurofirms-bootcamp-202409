console.log('TEST Array.prototype.includes')

console.log("CASE return true if exist the element, or false if don't exists")

var arr = [100, 200, 300, 400, 300, 800, 800]

console.log(arr.includes(200))
//true
console.log(arr.includes(8))
//false