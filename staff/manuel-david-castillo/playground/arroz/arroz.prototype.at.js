var Arroz = function () { this.length = 0 }

Arroz.prototype.at = function (position) {
    if (position < 0) {
        return this[this.length + position]
    } else {
        return this[position]
    }

}

var coches = new Arroz

coches[0] = "Mercedes Benz cla"
coches[1] = "BMW X5"
coches[2] = "Seat Ibiza"
coches[3] = "Lamborguini Aventador"
coches[4] = "Ferrari Enzo"
coches[5] = "Porche Callena"

coches.length = 6;

console.log(coches)

console.log("CASE1 get the position 4:")
var position4 = coches.at(4)
console.log(position4)
//Ferrari Enzo

console.log("CASE2 get the position -1:")
var position_1 = coches.at(-1)
console.log(position_1)
//Porche Callen

console.log("CASE3 get an unreal position:")
var unrealPosition = coches.at(8)
console.log(unrealPosition)
//Undefined