console.log('TEST Array.prototype.reverse')

console.log('CASE reverse the order of the elements')

var musicians = ['Fernando', 'Gaspar', 'Miguel', 'Rovert', 'Dionisio', 'Johann']
var bestMusicians = musicians.reverse()
console.log(musicians)
// [ 'Johann', 'Dionisio', 'Rovert', 'Miguel', 'Gaspar', 'Fernando']

console.log('CASE reverse the order of the two-dimensional elements')

var musicians = [
    ['Fernando', 'Gaspar'],
    ['Miguel', 'Rovert'],
    ['Dionisio', 'Johann']
]
var bestMusicians = musicians.reverse()
console.log(musicians)
// [ 'Dionisio', 'Johann' ],
// [ 'Miguel', 'Rovert' ],
// [ 'Fernando', 'Gaspar']

