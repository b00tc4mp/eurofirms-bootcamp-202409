var Arroz = function () { this.length = 0 }
Arroz.prototype.lastIndexOf = function (elementTosearch) {

    for (var i = this.length; i >= 0; i--) {
        if (this[i] === elementTosearch)
            return i
    }
    return -1
}

console.log('TEST Arroz.prototype.lastIndexOf')

console.log('CASE return a number if found')

var comics = new Arroz
comics[0] = 'Spider-Man'
comics[1] = 'Batman'
comics[2] = 'Wonder Woman'
comics[3] = 'Superman'
comics[4] = 'Iron man'
comics[5] = 'Superman'
comics.length = 6

var comicCharacters = comics.lastIndexOf('Superman')
console.log('if you find it at position 5->', comicCharacters)
// 5

console.log('CASE return a number -1 if not found')

var comics = new Arroz
comics[0] = 'spider-Man'
comics[1] = 'Batman'
comics[2] = 'Wonder Woman'
comics[3] = 'Superman'
comics[4] = 'Iron man'
comics[5] = 'Batman'
comics.length = 6

var comicCharacters = comics.lastIndexOf('X-men')
console.log('if it is not found, return -1->', comicCharacters)
// -1 

console.log('CASE return a number -5 if not found')

var comics = new Arroz
comics[0] = 'spider-Man'
comics[1] = 'Batman'
comics[2] = 'Wonder Woman'
comics[3] = 'Superman'
comics[4] = 'Iron man'
comics[5] = 'Batman'

var comicCharacters = comics.lastIndexOf('Batman', -5)
console.log('if it is not found, return -1->', comicCharacters)
// -1