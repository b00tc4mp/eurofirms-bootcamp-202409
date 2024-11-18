console.log("TEST Array.prototype.push")

console.log("CASE add 400 to nunms")

var nums = [100, 200, 300]
var length = nums.push(400)
console.log(nums)
//[100, 200, 300, 400] (4)
console.log(length)
//4

console.log("CASE add F to chars")

var chars = ["A", "B", "C", "D", "E"]
var length = chars.push("F")
console.log(chars)
// ["A", "B", "C", "D", "E", "F"] (6)
console.log(length)
// 6

console.log('CASE add many elements in one call')

var colors = ['red', 'green', 'blue', 'magenta']
var length = colors.push('cyan', 'yellow', 'orange', 'pink')
console.log(colors)
//['red', 'green', 'blue', 'magneta', cyian', 'yellow', 'orange', 'pink']
console.log(length)
// 8

//mi ejemplo>>>>>>
console.log('CASE add grapes and onions to shoppingList')
var shoppingList = ['bread', 'butter', 'oranges', 'meat']
var length = shoppingList.push('grapes', 'onions')
console.log(shoppingList)
//['bread', 'butter', 'oranges', 'meat', 'grapes', 'onions']
console.log(length)
// 6


