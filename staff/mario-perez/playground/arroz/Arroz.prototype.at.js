var Arroz = function () { this.length = 0 }

Arroz.prototype.at = function (position) {
    //return extracted element in a index position
    if (position > 0) {
        return this[position]
    } else {
        return this[this.length + position]
    }

}

console.log('TEST Arroz.prototype.at')

console.log('CASE return the element in position of parameter function')

var plants = new Arroz
plants[0] = 'broccoli'
plants[1] = 'cauliflower'
plants[2] = 'cabbage'
plants[3] = 'kale'
plants[4] = 'tomato'
plants.length = 5

var index = 2

var plant = (plants.at(index))
console.log(plant)
//cabbage
index = -2
plant = (plants.at(index))
console.log(plant)
// kale