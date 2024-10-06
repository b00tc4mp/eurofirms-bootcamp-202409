var students = ['luis f', 'mario', 'oscar', 'rosana', 'herminia', 'roberto', 'efren', 'mario', 'tea']

console.log('students->', students)
//['luis f, 'mario', 'oscar', 'rosana', 'herminia', 'roberto', 'efren', 'mario', 'tea']

console.log('indexOf rosana->', students.indexOf('rosana'))
//3

console.log('indexOf joserra->', students.indexOf('joserra'))
//-1

console.log('indexOf mario->', students.indexOf('mario'))
//1

console.log('indexOf mario from index 3', students.indexOf('mario', 3))
//7

console.log('indexOf mario from index -1', students.indexOf('mario', -1))
//-1

var cars = ['audi', 'mercedes benz', 'ferrari', 'citroen', 'peugeot', 'jaguar', 'seat', 'maserati', 'seat']

console.log('garaje', cars)
//['audi', 'mercedez benz', 'ferrari', 'citroen', 'peugeot', 'jaguar', 'seat', 'maserati', 'seat']

console.log('indexOf citroen ->', cars.indexOf('citroen'))
//3

console.log('indexOf chevrolet ->', cars.indexOf('chevrolet'))
//-1

console.log('indexOf seat ->', cars.indexOf('seat'))
//6

console.log('indexOf jaguar from index -6', cars.indexOf('jaguar', -6))
//5

console.log('indexOf audi from index 666', cars.indexOf('audi', 666))
//-1

console.log('indexOf audi from index -666', cars.indexOf('audi', -666))
//0