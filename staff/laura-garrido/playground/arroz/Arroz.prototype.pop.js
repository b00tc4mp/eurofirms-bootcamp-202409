var Arroz = function () { this.length = 0 }

Arroz.prototype.pop = function () {
    this.length-- //this.length = this.length - 1
    var removedElement = this[this.length]
    delete this[this.length]
    return removedElement
}

console.log('TEST Arroz.prototype.pop')

console.log('CASE remove "tomato" from plants')

var plants = new Arroz()
plants[0] = "broccoli"
plants[1] = "cauliflower"
plants[2] = "cabbage"
plants[3] = "kale"
plants[4] = "tomato"
plants.length = 5

var removedPlant = plants.pop()
console.log(plants)
// Arroz {0: "broccoli", 1: "cauliflower", 2: "cabbage", 3: "kale", length: 4 }
console.log(removedPlant)
// "tomato"

console.log('CASE remove "Maria" from friends')

var friends = new Arroz()
friends[0] = "Pedro"
friends[1] = "Silvia"
friends[2] = "Laura"
friends[3] = "Maria"
friends.length = 4

var removedFriend = friends.pop()
console.log(friends)
// Arroz { 0: "Pedro", 1: "Silvia", 2: "Laura", length: 3 }
console.log(removedFriend)
// "Maria"

