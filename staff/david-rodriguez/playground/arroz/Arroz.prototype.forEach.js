console.log(`TEST Array.prototype.forEach`);

console.log('CASE print all items of array');

var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num) {
    console.log(num);
});
// 1 2 3 4 5

console.log('CASE sum 2 to all items');

var numbers = [10, 11, 12, 13, 14, 15];
// Inicializamos sum para mayor claridad, aunque no es estrictamente necesario.
var sum;
numbers.forEach(function (num) {
    sum = num + 2;
    console.log(sum); // Ahora imprimirá correctamente la suma
});

// 12 13 14 15 16 17 

console.log('CASE position final race');

var race = ['Ferrari', 'Bugatti', 'BMW', 'Dacia'];

function raceResult(car, index) {
    // Cambiado a comillas invertidas para utilizar correctamente el template literal
    console.log(`El ${car} ha quedado en la posición ${index + 1}.`);
}

race.forEach(raceResult);