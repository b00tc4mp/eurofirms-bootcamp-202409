console.log('TEST Array.prototype.concat');

console.log('CASE returns a new array joined plants and plants1');

const plants = ['broccoli', 'cauliflower'];
const plants1 = ['cabbage', 'kale', 'tomato'];
const concatPlants = plants.concat(plants1);
console.log(concatPlants);
// ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

console.log('CASE returns a new array joined friends and friends1');

const friends = ['Pedro', 'Silvia'];
const friends1 = ['Laura', 'Maria'];
const concatFriends = friends.concat(friends1);
console.log(concatFriends);
// ['Pedro', 'Silvia', 'Laura', 'Maria']
