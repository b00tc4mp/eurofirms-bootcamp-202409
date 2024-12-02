// El método forEach() ejecuta la función indicada una vez por cada elemento del array. 


var Arroz = function () { this.length = 0 }

Arroz.prototype.forEach = function (callbackFunction) {
    for (i = 0; i < this.length; i++) {
        var element = this[i]
        callbackFunction(element)
    }
}

console.log('TEST Arroz.prototype.forEach')

console.log('CASE apply the function in a object')

var plants = new Arroz
plants[0] = 'broccoli'
plants[1] = 'cauliflower'
plants[2] = 'cabbage'
plants[3] = 'kale'
plants[4] = 'tomato'
plants.length = 5

function method(element) {
    console.log('element-> ', element)
}

plants.forEach(function (element) { console.log(element) })

plants.forEach(function (element) { console.log(element.toUpperCase()) })

plants.forEach(method)