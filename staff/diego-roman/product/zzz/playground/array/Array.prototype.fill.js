console.log('TEST Array.prototype.fill')

console.log('CASE fill array with "x"')

var letters = ['a', 'b', 'c', 'd', 'e']
letters.fill('x', 1, 4)
console.log(letters)
// ['a', 'x', 'x', 'x', 'e']
