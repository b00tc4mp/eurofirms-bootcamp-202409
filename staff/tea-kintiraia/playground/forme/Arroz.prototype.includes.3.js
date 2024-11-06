var Arroz = function () { this.length = 0 } 

Arroz.prototype.includes = function (searchElement, fromIndex) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        if (fromIndex === undefined) i = 0
        else i = fromIndex
        for (var i = 0; i < this.length; i++) {
            var element = this[i]

            if (element === searchElement) return true
        }
        return false
    }
   
}
console.log('TEST Arroz.prototype.includes')

console.log('CASE cars includes ferrari')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars.length = 4
var contains = cars.includes('ferrari')
console.log(contains)
// false

console.log('CASE cars includes fiesta')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars.length = 4
var contains = cars.includes('fiesta')
console.log(contains)
// true

console.log('CASE cars includes fiesta (2)')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars[4] = 'fiesta'
cars.length = 5
var contains = cars.includes('fiesta')
console.log(contains)
// true

console.log('CASE cars includes lambo from index 1')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars[4] = 'fiesta'
cars.length = 5
var contains = cars.includes('lambo', 1)
console.log(contains)
// false

console.log('CASE cars includes lambo from index 1 (2)')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars[4] = 'fiesta'
cars[5] = 'lambo'
cars.length = 6
var contains = cars.includes('lambo', 1)
console.log(contains)
// true

console.log('CASE movies includes roma')

var movies = new Arroz
movies[0] = 'fragiles'
movies[1] = 'falsa'
movies[2] = 'revenge'
movies[3] = 'roma'
movies[4] = 'theNun'
movies.length = 5
var contains = movies.includes('roma')
console.log(contains)
// true