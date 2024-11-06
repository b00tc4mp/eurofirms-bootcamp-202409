console.log("CASE Arroz includes")

var Arroz = function () { this.length = 0 }

Arroz.prototype.includes = function (element, index = 0) {
    if (index < 0) {
        index = this.length + index
    }

    for (let i = index; i < this.length; i++)
        if (this[i] === element) {
            return true
        }
    return false
}

var frutas = new Arroz

frutas[0] = "manzana"
frutas[1] = "fresa"
frutas[2] = "plátano"
frutas[3] = "sandía"
frutas[4] = "melón"
frutas.length = 5

console.log("TEST Arroz.prototype.includes")

console.log("CASE is INCLUDES sandía in fruta?")
var includeSandia = frutas.includes("sandía")
console.log(includeSandia)

console.log("CASE is INCLUDES sandía in fruta?")
var includeSandia = frutas.includes("sandía", 4)
console.log(includeSandia)

console.log("CASE is INCLUDES pera in fruta?")
var includeSandia = frutas.includes("pera")
console.log(includeSandia)