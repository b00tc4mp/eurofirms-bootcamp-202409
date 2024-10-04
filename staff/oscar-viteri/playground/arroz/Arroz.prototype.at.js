var Arroz = function () { this.length = 0 }

Arroz.prototype.at = function (element) {
    var adjustedElement = element >= 0 ? index : this.length + index;
    if (adjustedElement < 0 || adjustedElement >= this.length) {
        return undefined;
    }
    return this[adjustedElement];
}

console.log('TEST Arroz.prototype.at');

console.log('CASE resibe un valor numerico entero y devuelve el elemento en esa posicion')

var animals = new Arroz();
animals[0] = 'elephant';
animals[1] = 'shark';
animals[2] = 'eagle';
animals[3] = 'snake';
animals[4] = 'frog';
animals.length = 5

var firstAnimal = animals.at(0);
console.log(firstAnimal)
// 'elephant'

var lastAnimal = animals.at(-1)
console.log(lastAnimal)
// 'frog'

var outOfRAnge = animals.at(5)
console.log(outOfRAnge)
// undefined

var negativeOutOfRange = animals.at(-6)
// undefined