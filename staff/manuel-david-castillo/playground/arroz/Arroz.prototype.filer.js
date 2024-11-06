console.log("ARROZ filter")

Arroz = function () { this.length = 0 }

Arroz.prototype.filter = function (callback) {
    var result = new Arroz

    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result[result.length] = this[i]
            result.length++
        }
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

console.log("CASE get the elements where age is bigger than 28")
var biggerThan28 = function (element) {
    return element.age > 28
}
var newArroz = people.filter(biggerThan28)
console.log(newArroz)

console.log("CASE get elements whose name contains o")
var contentO = function (element) {
    return element.name.includes("o")
}
var newArroz = people.filter(contentO)
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

console.log("CASE get the even numbers")
var multiply = function (element) {
    if (element % 2 == 0) {
        return true
    } else {
        return false
    }
}
var newArroz = numbers.filter(multiply)
console.log(newArroz)

