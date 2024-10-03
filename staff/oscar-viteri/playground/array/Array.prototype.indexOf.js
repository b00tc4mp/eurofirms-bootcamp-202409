console.log("TEST Array.prototype.indexOf")

console.log("CASE Return a number if found, and -1 if not.")

var students = ['luis F', 'mario', 'oscar', 'rosana', 'herminia', 'roberto', 'efren', 'mario', 'tea'];

console.log('students->', students)
//['luis f', 'mario', 'oscar', 'rosana', 'herminia', 'roberto', 'efren', 'mario', 'tea']
console.log('indexOf rosana->', students.indexOf('rosana'))
//3
console.log('indexOf joserra->', students.indexOf('joserra'))
//-1
console.log('indexOf mario->', students.indexOf('mario'))
//1
console.log('indexOf Mario from index 3->', students.indexOf('mario', 3))
//7
console.log('indexOf mario from index -1', students.indexOf('mario', -1))
//-1