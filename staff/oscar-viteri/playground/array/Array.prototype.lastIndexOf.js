console.log('TEST Array.prototype.lastIndexOf')

console.log('CASE devuelve el ultimo indice y si el elemento no se encuentra -1')

var animals = ['dog', 'cat', 'bird', 'cat', 'fish']

var groupOfAnimals = animals.lastIndexOf('cat, -2');
console.log('devuelve -1 si no se encuentra->', groupOfAnimals);
// -1
var groupOfAnimals = animals.lastIndexOf('cat');
console.log('si lo encuentra 3->', groupOfAnimals);
// 3