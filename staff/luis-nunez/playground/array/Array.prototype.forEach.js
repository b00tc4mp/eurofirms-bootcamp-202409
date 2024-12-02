/* El metodo forEach en JS es parte del prototipo de los array,
esta función permite iterar sobre todos los elementos de un array y ejecutar
una función sobre cada uno de ellos, sin necesidad de escribir bucles como for o while*/

console.log('TEST Array.prototype.forEach');
console.log('CASE iterate over plants array');

var plants = ['brocoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];


console.log('Plants:');
plants.forEach(function (plant) {
    console.log(plant);
});
