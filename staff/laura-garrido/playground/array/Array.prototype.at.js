console.log('TEST array.prototype.at')

console.log('CASE return "tomato" from plants')

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
var atPlants = plants.at(-1)
console.log(atPlants)
// "tomato"

console.log('CASE return "Maria" from friends')

var friends = ['Pedro', 'Silvia', 'Laura', 'Maria']
var atFriends = friends.at(-1)
console.log(atFriends)
// "Maria"