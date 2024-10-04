console.log('TEST array.prototype.concat')

console.log('CASE returns a new array joined plants and plants1')

var plants = ['broccoli', 'cauliflower']
var plants1 = ['cabbage', 'kale', 'tomato']
var concatPlants = plants.concat(plants1)
console.log(concatPlants)
// ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

console.log('CASE returns a new array joined friends and friends1')

var friends = ['Pedro', 'Silvia']
var friends1 = ['Laura', 'Maria']
var concatFriends = friends.concat(friends1)
console.log(concatFriends)
// ['Pedro', 'Silvia', 'Laura', 'Maria']