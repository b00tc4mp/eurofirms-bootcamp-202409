var Arroz = function () { this.length = 0 }

Arroz.prototype.includes = function (element) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === element) {
            return true; // Si se encuentra el elemento, retorna true
        }
    }
    return false; // Si no se encuentra, retorna false
};

console.log('TEST arroz.prototype.includes')

console.log('CASE return true if "tomato" its on plants or false if it is not')

var plants = new Arroz()
plants[0] = "broccoli"
plants[1] = "cauliflower"
plants[2] = "cabbage"
plants[3] = "kale"
plants[4] = "tomato"
plants.length = 5

var includesPlants = plants.includes('tomato')
console.log(includesPlants)
// true

console.log('CASE return true if "Pepe" its on friends or false if its not')

var friends = new Arroz()
friends[0] = "Pedro"
friends[1] = "Silvia"
friends[2] = "Laura"
friends[3] = "Maria"
friends.length = 4

var includesFriends = friends.includes('Pepe')
console.log(includesFriends)
// false