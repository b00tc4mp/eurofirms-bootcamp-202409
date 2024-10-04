console.log('TEST Array.prototype.pop')

console.log('CASE remove "tomato" from plants')

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
var removedPlant = plants.pop()
console.log(plants)
// ['broccoli', 'cauliflower', 'cabbage', 'kale'] (4)
console.log(removedPlant)
// "tomato"

console.log('CASE remove "Maria" from friends')
var friends = ['Pedro', 'Silvia', 'Laura', 'Maria']
var removedFriend = friends.pop()
console.log(friends)
// ['Pedro', 'Silvia', 'Laura'] (3)
console.log(removedFriend)
// "Maria"