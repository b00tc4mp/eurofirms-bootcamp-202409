var students = ['luis f', 'mario', 'oscar', 'rosana', 'herminia', 'roberto', 'efren', 'mario', 'tea']

console.log('students', students)
//expected result -> ['luis f', 'mario', 'oscar', 'rosana', 'herminia', 'roberto', 'efren', 'mario', 'tea']

console.log('indexOf rosana->', students.indexOf('rosana'))
// expected result -> 3

console.log('indexOf joserra->', students.indexOf('joserra'))
// expected result -> -1 // significa que no está en la lista

console.log('indexOf mario->', students.indexOf('mario'))
// expected result -> 1

console.log('indexOf mario from index 3 ->', students.indexOf('mario', 3))
// expected result -> 7

console.log('indexOf mario from index -1 ->', students.indexOf('mario', -1))
// expected result -> -1

var cars = ['audi', 'mercedes benz', 'ferrari', 'citroen', 'peugeot', 'jaguar', 'seat', 'maserati', 'seat']

console.log('garaje', cars)

// expected result -> ['audi', 'mercedes benz', 'ferrari', 'citroen', 'peugeot', 'jaguar', 'seat', 'maserati', 'seat']

console.log('indexOf citroen ->', cars.indexOf('citroen'))
// expected result -> 3

console.log('indexOf chevrolet ->', cars.indexOf('chevrolet'))
// expected result -> -1 // significa que no hay ninguno en la lista

console.log('indexOf seat ->', cars.indexOf('seat'))
// expected result -> 6

console.log('indexOf jaguar from index -6 ->', cars.indexOf('jaguar', -6))
// expected result -> 5

console.log('indexOf audi from index 666 ->', cars.indexOf('audi', 666))
// expected result -> -1

console.log('indexOf audi from index -666 ->', cars.indexOf('audi', -666))
// expected result -> 0