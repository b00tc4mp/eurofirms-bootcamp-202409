var Arroz = function () { this.length = 0 }

Arroz.prototype.pop = function () {?}

console.log('CASE extract tomato from plants')

var plants = new Arroz
plants[0] = 'brocoli'
plants[1] = 'cauliflower'
plants[2] = 'cabbage'
plants[3] = 'kale'
plants[4] = 'tomate'
plants.length = 5
var plant = plants.pop()
console.log(plants)
// Arroz ´{0: 'brocoli', 1: cauliflowe', 2: 'cabbage', 3: 'kale', length: 4 }
console.log(plant)
// tomate

