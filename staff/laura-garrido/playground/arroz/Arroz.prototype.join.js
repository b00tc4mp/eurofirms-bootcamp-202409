var Arroz = function () { this.length = 0 }

Arroz.prototype.join = function (element) {
    let result = ''
    for (var i = 0; i < this.length; i++) {
        result += this[i]
        if (i < this.length - 1) {
            result += ',' // Separa los elementos con una ,
        }
    }
    return result; // Retorna el string final
}

console.log('TEST arroz.prototype.join')

console.log('CASE joins all elements of plants into a string and returns this string')

var plants = new Arroz()
plants[0] = "broccoli"
plants[1] = "cauliflower"
plants[2] = "cabbage"
plants[3] = "kale"
plants[4] = "tomato"
plants.length = 5

var joinPlants = plants.join()
console.log(joinPlants)
// broccoli,cauliflower,cabbage,kale,tomato

console.log('CASE joins all elements of friends into a string and returns this string')

var friends = new Arroz()
friends[0] = "Pedro"
friends[1] = "Silvia"
friends[2] = "Laura"
friends[3] = "Maria"
friends.length = 4

var joinFriends = friends.join()
console.log(joinFriends)
// Pedro,Silvia,Laura,Maria