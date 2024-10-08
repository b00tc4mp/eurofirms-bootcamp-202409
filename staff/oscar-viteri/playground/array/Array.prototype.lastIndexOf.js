console.log('TEST Array.prototype.lastIndexOf')

console.log('CASE if the element is in the 5 position')

var comics = ['Spider-Man', 'Batman', 'Wonder Woman', 'Superman', 'Iron Man', 'Superman']
var comicCharacters = comics.lastIndexOf('Superman')
console.log('if you find it at position 5->', comicCharacters)
// 5

console.log('CASE if the element is in the -1 position')

var comics = ['Spider-Man', 'Batman', 'Wonder Woman', 'Superman', 'Iron Man', 'Batman']
var comicCharacters = comics.lastIndexOf('Batman, -5')
console.log('if it is not found, return -1->', comicCharacters)
// -1
console.log('CASE if the element is in the -5 position')

var comics = ['Spider-Man', 'Batman', 'Wonder Woman', 'Spider-Man', 'Superman', 'Iron man']
var comiCharacters = comics.lastIndexOf('Batman', -5)
console.log('if it is not found, return -1->', comicCharacters)
// -1