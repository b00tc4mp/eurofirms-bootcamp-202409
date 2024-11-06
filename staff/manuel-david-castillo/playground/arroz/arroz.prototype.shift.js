var Arroz = function () { this.length = 0 }

Arroz.prototype.shift = function () {
    var firstElement = this[0]

    for (var i = 0; i < this.length - 1; i++) {
        var saveElement = this[i + 1]

        delete this[i]

        this[i] = saveElement;
    }

    delete this[this.length - 1]

    this.length--

    return firstElement
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

console.log("CASE1 delete first element")
var element = coches.shift()
console.log(element)
console.log(coches)

console.log("CASE2 delete first element")
var element = coches.shift()
console.log(element)
console.log(coches)

console.log("CASE3 delete first element")
var element = coches.shift()
console.log(element)
console.log(coches)
