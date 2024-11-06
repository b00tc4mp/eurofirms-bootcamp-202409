console.log("describe find")

console.log("CASE people")

var people = [
    {
        name: "Paco",
        age: 30,
        origin: "Madrid"
    },
    {
        name: "Laura",
        age: 16,
        origin: "Sevilla"
    },
    {
        name: "Manolo",
        age: 25,
        origin: "Jaén"
    },
    {
        name: "Lucía",
        age: 32,
        origin: "Córdoba"
    }
]

console.log("CASE get the element with name Lucía")
var findLucia = function (element) {
    return element.name === "Lucía"
}
console.log(people.find(findLucia))

console.log("CASE get the first element with the age more than 27")
var ageMoreThan30 = function (element) {
    return element.age > 27
}
console.log(people.find(ageMoreThan30))

console.log("CASE get the first element aged between 24 and 26 ")
var ageBetween24and26 = function (element) {
    if (element.age > 50 && element.age < 26) {
        return element
    }
}
console.log(people.find(ageBetween24and26))