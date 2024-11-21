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
        //  
        if (deleteCount === 0 && item !== undefined) {

            for (let i = this.length - 1; i >= start; i--) {
                this[i + 1] = this[i]

            }
            this.length++
            this[start] = item

            return this

        }
        console.log(this)
        /* const objeto = { a: 1, b: 2 };
        objeto.c = 3; // Agrega un nuevo elemento con clave "c" y valor 3
        console.log(objeto); // { a: 1, b: 2, c: 3 } */
    }

}


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

movies.splice(2, 0, 'IA Robot')

// ir a la posición 2 -> start <-
// borrar un elemento -> delete this[start] <-
// añadir un item -> this.start = item 

console.log('CASO 1', movies)