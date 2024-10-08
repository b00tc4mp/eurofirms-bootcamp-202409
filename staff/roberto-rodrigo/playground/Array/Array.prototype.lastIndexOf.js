console.log('TEST array.prototype.lastIndexOf')

console.log('CASE get lastIndexOf podenco')

var dogs = ['labrador', 'beagle', 'podenco', 'pastor', 'bulldog', 'labrador']
var indice = dogs.lastIndexOf('labrador')
console.log(indice)
// 5 

console.log('CASE get lastIndexOf golden')

var dogs = ['labrador', 'golden', 'podenco', 'golden', 'bulldog']
var indice = dogs.lastIndexOf('golden')
console.log(indice)
// 3


console.log('CASE get lastIndexOf terrier')

var dogs = ['labrador', 'golden', 'podenco', 'pastor', 'bulldog']
var indice = dogs.lastIndexOf('terrier')
console.log(indice)
// -1

console.log('CASE get lastIndexOf of bulldog')

var dogs = ['labrador', 'bulldog', 'podenco', 'bulldog', 'bulldog']
var indice = dogs.lastIndexOf('bulldog', -3)
console.log(indice)
// 1

