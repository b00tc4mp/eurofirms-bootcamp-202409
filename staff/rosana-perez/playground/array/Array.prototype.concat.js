console.log('TEST Array.prototype.concat')

/*
El método concat() se usa para unir dos o más arrays. 
Este método no cambia los arrays existentes, sino que devuelve un nuevo array
*/
console.log('CASE 1 -> concat array with pets and farm animals')

var pets = ['cat', 'dog', 'rabbit', 'snike', 'ferret']

var farmAnimals = ['chicken', 'cow', 'horse', 'pig', 'duck']

var allAnimals = farmAnimals.concat(pets);

console.log(allAnimals)
//['chicken', 'cow', 'horse', 'pig', 'duck', 'cat', 'dog', 'rabbit', 'snike', 'ferret']


console.log('CASE 2 -> concat four arrays of animals')

var earthAnimals = ['ant', 'beetle', 'worm']

var waterAnimals = ['turtle', 'fish', 'shrimp', 'octopus']

var animalsInWorld = pets.concat(farmAnimals, earthAnimals, waterAnimals);

console.log(animalsInWorld);

// ['cat', 'dog', 'rabbit', 'snike', 'ferret', 'chicken', 'cow', 'horse', 'pig', 'duck'
// 'ant', 'beetle', 'worm', 'turtle', 'fish', 'shrimp', 'octopus']