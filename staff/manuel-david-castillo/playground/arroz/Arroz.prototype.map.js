console.log("ARROZ map")

Arroz = function () { this.length = 0 }

Arroz.prototype.map = function (callback) {
    var result = new Arroz

    for (var i = 0; i < this.length; i++) {
        result[i] = callback(this[i])
        result.length++
    }

    return result
}

console.log("CASE with people")
var people = new Arroz
people[0] = {
    name: "Paco",
    age: 30,
    origin: "Madrid"
}
people[1] = {
    name: "Laura",
    age: 16,
    origin: "Sevilla"
}
people[2] = {
    name: "Manolo",
    age: 25,
    origin: "Jaén"
}
people[3] = {
    name: "Lucía",
    age: 32,
    origin: "Córdoba"
}
people.length = 4

console.log("CASE sum 5 to each age of element")
var sum5 = function (element) {
    var elementChanged = { ...element }
    elementChanged.age += 5
    return elementChanged
}
var newArroz = people.map(sum5)
console.log(newArroz)

console.log("CASE transform ro uper case each name")
var toUpperCase = function (element) {
    var elementChanged = { ...element }
    elementChanged.name = elementChanged.name.toUpperCase()
    return elementChanged
}
var newArroz = people.map(toUpperCase)
console.log(newArroz)


console.log("CASE with numbers")
var numbers = new Arroz
numbers[0] = 0
numbers[1] = 1
numbers[2] = 2
numbers[3] = 3
numbers[4] = 4
numbers[5] = 5
numbers.length = 6

console.log("CASE multiply each number for 5")
var multiply = function (element) {
    return element * 5
}
var newArroz = numbers.map(multiply)
console.log(newArroz)

