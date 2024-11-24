/* function splice(start, deleteItem, item) {
    let deleteCont = 0;
    for (i = start; i < this.length - 1; i++) {
        if (deleteItem > 0) {
            for (i = start; i <= start + deleteItem; i++) {
                delete this[i]
            }
            if (item != undefined) {
                this[this.length] = item
            }
        } else if (deleteItem = 0) {

        }

    }
} */


// Archivo de Rosana

class Arroz {
    constructor() {
        this.length = 0
    }


    splice(start, deleteCount, item) {
        // si existe un valor en deleteCount, borrar los elementos que corresponden
        // si existe item, añadirlo en la posición que corresponda
        //  

        // Añadir elementos
        if (deleteCount === 0 && item !== undefined) {

            for (let i = this.length - 1; i >= start; i--) {
                this[i + 1] = this[i]

            }
            this.length++
            this[start] = item

            return this

        }

        if (deleteCount !== 0) {
            for (let i = start; i < deleteCount + start; i++) {
                console.log('borro el ' + this[i])
                delete this[i]
                this[i + 1] = this[i] // copiar en la siguiente posición
                this.length--
                console.log(this)
            }
            // start = 2 , deleteCount: 4 , length = 4  -> antes length = 8 - (deleteCount = 4)
            // { 0 : karate kid , 1: 'vacaciones en roma', 6: undefined, 7: 'WIP', length: 4}
            // { 0 : karate kid , 1: 'vacaciones en roma', 2: undefined, 7: 'WIP', length: 4}
            // { 0 : karate kid , 1: 'vacaciones en roma', 2: undefined, 3: 'WIP', length: 4}






            //console.log(this)
            /* const objeto = { a: 1, b: 2 };
            objeto.c = 3; // Agrega un nuevo elemento con clave "c" y valor 3
            console.log(objeto); // { a: 1, b: 2, c: 3 } */
        }

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

//movies.splice(2, 0, 'IA Robot')
movies.splice(2, 4)

// ir a la posición 2 -> start <-
// borrar un elemento -> delete this[start] <-
// añadir un item -> this.start = item 

console.log('CASO 1', movies)
