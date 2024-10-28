console.log('TEST Array.prototype.join')

// El método join() une todos los elementos de una matriz
//(o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

console.log('CASE 1 -> create a list of cities with a dot between')

var cities = ['Vigo', 'Madrid', 'Barcelona', 'A Coruña', 'Leon']

var citiesList = cities.join('.')

console.log(citiesList);
// Vigo.Madrid.Barcelona.A Coruña.Leon

console.log('CASE 2 -> create a list of cities with a space between')

var citiesList = cities.join(' ')

console.log(citiesList);
// Vigo Madrid Barcelona A Coruña Leon


console.log('CASE 3 -> create a list of cities with the sign "->" between')

var citiesList = cities.join(' -> ')

console.log(citiesList);
// Vigo -> Madrid -> Barcelona -> A Coruña -> Leon


console.log('CASE 4 -> create a list of cities with an "and" between')

var citiesList = cities.join(' and ')

console.log(citiesList)

// Vigo and Madrid and Barcelona and A Coruña and Leon