console.log('TEST Array.prototype.find')

console.log('CASE find first name with length greater that 5')

var names = [
    'Peter',
    'John',
    'Max',
    'James',
    'Constantin',
    'Mario',
    'Tea',
    'Luis',
]

var name = names.find(function (name) {
    return name.length > 5
});
console.log(name)
// Constantin

console.log('CASE find first name with character x')

/* var names = [
    'Peter',
    'John',
    'Max',
    'James',
    'Constantin',
    'Mario',
    'Tea',
    'Luis',
]
*/
varname = names.find(function (name) {
    return name.includes('x')
});
console.log(name)
