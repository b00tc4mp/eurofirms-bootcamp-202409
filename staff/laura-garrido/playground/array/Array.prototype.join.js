console.log('TEST array.prototype.join')

console.log('CASE joins all elements of plants into a string and returns this string')

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
var joinPlants = plants.join()
console.log(joinPlants)
// "broccoli,cauliflower,cabbage,kale,tomato"

console.log('CASE joins all elements of friends into a string and returns this string')

var friends = ['Pedro', 'Silvia', 'Laura', 'Maria']
var joinFriends = friends.join()
console.log(joinFriends)
// "Pedro,Silvia,Laura,Maria"