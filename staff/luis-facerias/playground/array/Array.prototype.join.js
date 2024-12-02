// ARRAY.PROTOTYTPE.JOIN

// The join method of the Array function returns
// concatenate array elements separated by commas

console.log('TEST Array.prototype.join')


// Check elements in array returned are separated by commas
console.log('CASE get array elements separated by commas')

var cars = ['Renault', 'Tata', 'Simca', 'Renault']
var element = cars.join()
console.log(element)
// Renault,Tata,Simca,Renault



// Check elements in array returned are separated by separator
console.log('CASE get array elements separated by separator')

var cars = ['Renault', 'Tata', 'Simca', 'Renault']
var element = cars.join('|')
console.log(element)
// Renault|Tata|Simca|Renault



// Check the separator in an element's array
console.log('CASE separator in an element\'s array')

var cars = ['Tata']
var element = cars.join('|')
console.log(element)
// Tata


