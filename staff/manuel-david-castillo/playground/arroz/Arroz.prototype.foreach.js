console.log("ARROZ forEach")
console.log("CASE with people")

Arroz = function () { this.length = 0 }

Arroz.prototype.forEach = function (callback) {
    for (var i = 0; i < this.length; i++) {
        callback(this[i])
    }
}

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

console.log("CASE print every element of Arroz")
var consoleLogFunction = function (element) {
    console.log(element.origin)
}
people.forEach(consoleLogFunction)

console.log("CASE sum 2 to each element")
var sum2 = function (element) {
    element.age = element.age + 2
}
people.forEach(sum2)
console.log(people)