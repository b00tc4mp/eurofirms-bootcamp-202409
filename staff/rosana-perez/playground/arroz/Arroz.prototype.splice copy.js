console.log('TEST Arroz.prototype.splice')

// El método splice() cambia el contenido de un array 
//eliminando elementos existentes y/o agregando nuevos elementos.
// tiene tres parámetros: start, deleteCount y item
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

class Arroz {
    constructor() {
        this.length = 0
    }


    splice(start, deleteCount, item) {
        // si existe un valor en deleteCount, borrar los elementos que corresponden
        // si existe item, añadirlo en la posición que corresponda

        let deletedElements = []

        if (deleteCount === 0 && item !== undefined) {

            for (let i = this.length - 1; i >= start; i--) {
                this[i + 1] = this[i]

            }
            this.length++
            this[start] = item

        }



        if (deleteCount !== 0) {

            /*  for (let i = start; i < deleteCount + start; i++) {
  
                  deletedElements.push(this[i])
                  this[i] = this[i + deleteCount]
  
                  delete this[i + deleteCount]
                  if (i >= this.length) {
                      delete this[i]
                  }
                  this.length--
  
  
              }
  
          } return deletedElements
  
  */


        }

    }


    /* const objeto = { a: 1, b: 2 };
                objeto.c = 3; // Agrega un nuevo elemento con clave "c" y valor 3
                console.log(objeto); // { a: 1, b: 2, c: 3 } */


    const movies = new Arroz();

movies[0] = 'karate kid'
movies[1] = 'vacaciones en roma'
movies[2] = 'seven'
movies[3] = 'men in black'
movies[4] = 'forrest gump'
movies[5] = 'el guardaespaldas'
movies[6] = 'interstellar'
movies[7] = 'WIP'
movies.length = 8


    const moviesWithIA = movies.splice(2, 0, 'IA Robot')
console.log('CASO 1', moviesWithIA)
console.log(movies)
    /* expected output -> Arroz {
      '0': 'karate kid',
      '1': 'vacaciones en roma',
      '2': 'IA Robot',
      '3': 'seven',
      '4': 'men in black',
      '5': 'forrest gump',
      '6': 'el guardaespaldas',
      '7': 'interstellar',
      '8': 'WIP',
      length: 9} */

    // ir a la posición 2 -> start <-
    // borrar un elemento -> delete this[start] <-
    // añadir un item -> this.start = item 


    const names = new Arroz();

names[0] = 'Peter'
names[1] = 'John'
names[2] = 'Max'
names[3] = 'Constantin'
names[4] = 'James'
names[5] = 'Mario'
names[6] = 'Tea'
names[7] = 'Luis'
names.length = 8

console.log(names.splice(1, 2))


console.log(names)


// start = 2 , deleteCount: 4 , length = 4  -> antes length = 8 - (deleteCount = 4)
// { 0 : 'karate kid', 1: 'vacaciones en roma', 6: 'interstellar', 7: 'WIP', length: 4}
// { 0 : 'karate kid', 1: 'vacaciones en roma', 2: 'interstellar', 7: 'WIP', length: 4}
// { 0 : 'karate kid', 1: 'vacaciones en roma', 2: 'interstellar', 3: 'WIP', length: 4}

