var Arroz = function () { this.length = 0 }

Arroz.prototype.concat = function (...arrays) {
    var result = new Arroz();
    for (var i = 0; i < this.length; i++) {
        result[result.length] = this[i]; // Copia los elementos del arreglo original
        result.length++;
    }

    for (var j = 0; j < arrays.length; j++) {
        var currentArray = arrays[j];
        for (var k = 0; k < currentArray.length; k++) {
            result[result.length] = currentArray[k]; // Copia los elementos de los arreglos pasados
            result.length++;
        }
    }

    return result // Retorna el nuevo arreglo concatenado
};

console.log('TEST arroz.prototype.concat')

console.log('CASE returns a new array joined plants and plants1')

var plants = new Arroz()
plants[0] = "broccoli"
plants[1] = "cauliflower"
plants.length = 2

var plants1 = new Arroz()
plants1[0] = "cabbage"
plants1[1] = "kale"
plants1[2] = "tomato"
plants1.length = 3

var concatPlants = plants.concat(plants1)
console.log(concatPlants)
// Arroz { 0: 'broccoli', 1: 'cauliflower', 2: 'cabbage', 3: 'kale', 4: 'tomato', length: 5 }

console.log('CASE returns a new array joined friends and friends1')

var friends = new Arroz()
friends[0] = "Pedro"
friends[1] = "Silvia"
friends.length = 2

var friends1 = new Arroz()
friends1[0] = "Laura"
friends1[1] = "Maria"
friends1.length = 2

var concatFriends = friends.concat(friends1)
// Arroz { 0: 'Pedro', 1: 'Silvia', 2: 'Laura', 3: 'Maria', length: 4 }