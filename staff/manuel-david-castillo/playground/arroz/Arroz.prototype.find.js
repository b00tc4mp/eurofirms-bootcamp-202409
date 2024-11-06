console.log("ARROZ find")
console.log("CASE with people")

Arroz = function () { this.length = 0 }

Arroz.prototype.find = function (callback) {
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return this[i]
        }
    }
    return undefined
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

console.log("CASE search person aged 25")
var searchAge25 = function (element) {
    return element.age === 26
}

var person = people.find(searchAge25)
console.log(person)