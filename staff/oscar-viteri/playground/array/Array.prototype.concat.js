console.log('TEST Array.prototype.concat')

console.log('CASE one more array')

var friends = ['Emma', 'Liam', 'Olivia', 'Noah']
var moreFriends = ['Alice', 'Bob', 'Charlie', 'Diana']

var allFriends = moreFriends.concat(friends);

console.log(allFriends);

console.log('CASE two more arrays')
var friends = ['Emma', 'Liam', 'Olivia', 'Noah', 'Alice', 'Bob', 'Charlie', 'Diana']
var moreFriends = ['Oscar', 'Gregorio', 'Pascual']
var newFriends = ['Fabian', 'Maria']

var allFriends = friends.concat(moreFriends, newFriends)

console.log(allFriends);
//all friends

console.log('CASE Three more arrays')

var friends = ['Emma', 'Gregorio']
var moreFriends = ['Oscar', 'Alice']
var newFriends = ['Fausto', 'Carlos']
var knownPeople = ['Mario', 'Edgar', 'Faustino']

var allFriends = friends.concat(moreFriends, newFriends, knownPeople)

console.log(allFriends)
