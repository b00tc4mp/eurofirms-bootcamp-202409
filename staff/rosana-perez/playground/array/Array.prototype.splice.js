console.log('TEST Array.prototype.splice')

// El método splice() cambia el contenido de un array 
//eliminando elementos existentes y/o agregando nuevos elementos.
// tiene tres parámetros: start, deleteCount y item
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

let movies = ['karate kid', 'vacaciones en roma', 'seven', 'men in black', 'forrest gump', 'el guardaespaldas', 'interestellar', 'WIP']

console.log('CASO 1 -> Add IA Robot to movies in the position 2')

movies.splice(2, 0, 'IA Robot')

console.log(movies)
// movies = ['karate kid', 'vacaciones en roma', 'IA Robot', 'seven', 'men in black', 'forrest gump', 'el guardaespaldas', 'interestellar', 'WIP']]


console.log('CASO 2 -> Add IA Robot in position 2 and delete seven')

movies = ['karate kid', 'vacaciones en roma', 'seven', 'men in black', 'forrest gump', 'el guardaespaldas', 'interestellar', 'WIP']


movies.splice(2, 1, 'IA Robot')

console.log(movies)
// 'karate kid', 'vacaciones en roma', 'IA Robot', 'men in black', 'forrest gump', 'el guardaespaldas', 'interestellar', 'WIP']


console.log('CASO 3 -> Add IA Robot in position > arr.length')

movies = ['karate kid', 'vacaciones en roma', 'seven', 'men in black', 'forrest gump', 'el guardaespaldas', 'interestellar', 'WIP']

movies.splice(9, 1, 'IA Robot')

console.log(movies)
// movies = ['karate kid', 'vacaciones en roma', 'seven', 'men in black', 'forrest gump', 'el guardaespaldas', 'interestellar', 'WIP', 'IA Robot']


console.log('CASO 4 -> Add IA Robot in position -3')

movies = ['karate kid', 'vacaciones en roma', 'seven', 'men in black', 'forrest gump', 'el guardaespaldas', 'interestellar', 'WIP']

movies.splice(-3, 0, 'IA Robot')
//movies = ['karate kid', 'vacaciones en roma', 'seven', 'men in black', 'forrest gump', 'IA Robot', 'el guardaespaldas',  'interestellar', 'WIP']

console.log(movies)