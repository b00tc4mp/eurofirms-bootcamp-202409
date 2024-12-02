var Arroz = function () { this.length = 0 }

Arroz.prototype.indexOf = function (element) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === element) {
            return i; // Retorna el índice del elemento encontrado
        }
    }
    return -1; // Si no se encuentra, retorna -1
};

console.log('TEST arroz.prototype.indexOf')

console.log('CASE return the index of "tomato" on plants')

var plants = new Arroz()
plants[0] = "broccoli"
plants[1] = "cauliflower"
plants[2] = "cabbage"
plants[3] = "kale"
plants[4] = "tomato"
plants.length = 5

var indexOfPlants = plants.indexOf('tomato')
console.log(indexOfPlants)
// 4

console.log('CASE return the index of "Pepe" on friends')

var friends = new Arroz()
friends[0] = "Pedro"
friends[1] = "Silvia"
friends[2] = "Laura"
friends[3] = "Maria"
friends.length = 4

var indexOfFriends = friends.indexOf('Pepe')
console.log(indexOfFriends)
// -1