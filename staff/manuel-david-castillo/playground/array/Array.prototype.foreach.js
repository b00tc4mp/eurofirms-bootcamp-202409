console.log("describe foreach")

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

console.log("CASE get the names")
var getName = function (element) {
    console.log(element.name)
}
people.forEach(getName)

console.log("CASE get ages")
people.forEach(element => console.log(element.age))

console.log("CASE sum 2 to the age")
var sum2 = function (element) {
    element.age = element.age + 2
}
people.forEach(sum2)
console.log(people)