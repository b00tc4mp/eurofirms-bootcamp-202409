console.log('TEST array.prototype.includes')

console.log('CASE return true or false if "tomato" it is on plants')

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
var includesPlants = plants.includes('tomato')
console.log(includesPlants)
// true

console.log('CASE return true or false if "Pepe" its on friends')

var friends = ['Pedro', 'Silvia', 'Laura', 'Maria']
var includesFriends = friends.includes('Pepe')
console.log(includesFriends)
// false