console.log('TEST Array.prototype.shift')

console.log('CASE remove the element -> Monday and return it')

var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
var holiday = daysOfTheWeek.shift()
console.log(holiday)
console.log(daysOfTheWeek)
// Monday

console.log('CASE remove an Element from a two-Dimentsional Array')

var daysOfTheWeek = [
    ['Monday', 'Tuesday'],
    ['Wedneday', 'Thursday'],
    ['Friday', 'Satuday'],
    ['Sunday']
]
var holiday = daysOfTheWeek.shift();
console.log(holiday)
console.log(daysOfTheWeek)
// [ 'Monday', 'Tuesday' ]