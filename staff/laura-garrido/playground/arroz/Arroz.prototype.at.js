var Arroz = function () { this.length = 0 }

Arroz.prototype.at = function (index) {
    index = this.length + index
    return this[index]
}

console.log('TEST arroz.prototype.at')

console.log('CASE return "tomato" from plants')

var plants = new Arroz()
plants[0] = "broccoli"
plants[1] = "cauliflower"
plants[2] = "cabbage"
plants[3] = "kale"
plants[4] = "tomato"
plants.length = 5

var atPlants = plants.at(-1)
console.log(atPlants)
// "tomato"

console.log('CASE return "Maria" from friends')

var friends = new Arroz()
friends[0] = "Pedro"
friends[1] = "Silvia"
friends[2] = "Laura"
friends[3] = "Maria"
friends.length = 4

var atFriends = friends.at(-1)
console.log(atFriends)
// "Maria"