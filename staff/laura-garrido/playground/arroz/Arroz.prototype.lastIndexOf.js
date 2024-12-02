var Arroz = function () { this.length = 0 }

Arroz.prototype.lastIndexOf = function (element) {
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] === element) {
            return i; // Retorna el índice del último elemento encontrado
        }
    }
    return -1; // Si no se encuentra, retorna -1
};

console.log('TEST arroz.prototype.lastIndexOf')

console.log('CASE return the last index of "tomato" on plants')

var plants = new Arroz()
plants[0] = "broccoli"
plants[1] = "cauliflower"
plants[2] = "cabbage"
plants[3] = "kale"
plants[4] = "tomato"
plants.length = 5

var lastIndexOfPlants = plants.lastIndexOf('tomato')
console.log(lastIndexOfPlants)
// 4

console.log('CASE return the last index of "Pepe" on friends')

var friends = new Arroz()
friends[0] = "Pedro"
friends[1] = "Silvia"
friends[2] = "Laura"
friends[3] = "Maria"
friends.length = 4

var lastIndexOfFriends = friends.lastIndexOf('Pepe')
console.log(lastIndexOfFriends)
// -1