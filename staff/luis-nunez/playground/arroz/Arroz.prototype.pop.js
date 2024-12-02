var Arroz = function () { this.length = 0 }

Arroz.prototype.pop = function () {
    /* 
    extract last element from arroz (reference in a local variable )
    delete last element from arroz 
    decrement arroz length by 1
    return extracted element
    */

    var last = this[this.length - 1]
    delete this[this.length - 1]
    this.length--// this.length = this.length -1 <<que es lo mismo pero mas largo>>
    return last
}
console.log('CASE extract tomato from plants')

var plants = new Arroz
plants[0] = 'brocoli'
plants[1] = 'cauliflower'
plants[2] = 'cabbage'
plants[3] = 'kale'
plants[4] = 'tomato'
plants.length = 5
var plant = plants.pop()
console.log(plants)
// Esto es Arroz { 0: 'brocoli', 1: 'cauliflower', 2: 'cabbage', 3: 'kale', length: 4 }
console.log(plant)
// tomato  devuelve -