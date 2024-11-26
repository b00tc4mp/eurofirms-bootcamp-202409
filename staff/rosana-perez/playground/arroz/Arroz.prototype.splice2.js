console.log('TEST Arroz.prototype.splice')

// El método splice() cambia el contenido de un array 
//eliminando elementos existentes y/o agregando nuevos elementos.
// tiene tres parámetros: start, deleteAmount y elementsToAdd
// array.splice(start[, deleteAmount[, item1[, item2[, ...]]]])

class Arroz {
    constructor() {
        this.length = 0
    }


    splice(start, deleteAmount, elementsToAdd) {
        // si existe un valor en deleteAmount, borrar los elementos que corresponden
        // si existe elementsToAdd, añadirlo en la posición que corresponda

        let deletedElements = []

        if (deleteAmount === 0 && elementsToAdd !== undefined) {

            for (let i = this.length - 1; i >= start; i--) {
                this[i + 1] = this[i]

            }
            this.length++
            this[start] = elementsToAdd

        }

        if (deleteAmount > 0 && deleteAmount + start <= this.length) {

            //let deletedElements = []

            //PASO 1 -> añadir a deletedElements los elementos a borrar despues

            for (let i = start; i < start + deleteAmount; i++) {
                deletedElements.push(this[i])

            }
            //PASO 2 -> borrar la cantidad de elementos pedida (deletedAmount) desde la posicion indicada (start)
            // names.splice(1,2) start ->1, deleteAmount ->2, length: 8, elementsToAdd-> undefined

            for (let i = start; i < start + deleteAmount; i++) {
                delete this[i]
                this.length--
            }
            //PASO 3 -> mover los elementos posteriores a start cada una de posiciones igual a deletedAmount

            //{0: 'Peter', 3: 'James', 4: 'Constantin',  5: 'Mario', 6: 'Tea', 7: 'Luis', length: 6}

            for (let i = start; i < this.length; i++) {
                this[i] = this[i + deleteAmount]//

            }
        }

        if (deleteAmount > (this.length - start) || deleteAmount === undefined) {
            //PASO 1,- crear un array para guardar los elementos eliminados
            //let deletedElements = []

            //PASO 2.- copiar los elementos a borrar en el array 
            // desde start: 3; nºelementos a borrar: 6, length: 8
            //deletedElements = [400, 500, 600, 700, 800]
            for (let i = start; i < this.length; i++) {
                deletedElements.push(this[i])
            }

            // PASO 3.- eliminar todos los elementos a partir de start
            for (let i = this.length; i > start; i--) {
                delete this[i - 1]
                this.length--
            }

        }
        return deletedElements
    }
}


console.log('CASO 1 -> añadir el elemento "IA Robot" al objeto movies, en la posición 2 sin borrar ningún elemento')

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

console.log('elementos eliminados de caso 1-> ', movies.splice(2, 0, 'IA Robot'))
console.log('objeto movies después de añadir un elemento y no borrar ninguno -> ', movies)

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


console.log('CASO 2 -> desde la posicion 1, borrar 2 elementos y no insertar nada')

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

console.log('elementos eliminados del caso 2 ', names.splice(1, 2))
//[John, MaX]

console.log('names después de caso 2-> ', names)
//{0: 'Peter', 1: 'James', 2: 'Constantin', 3: 'Mario', 4: 'Tea', 5: 'Luis', length: 6}

console.log('CASO 3 -> elementos  a eliminar 6 desde la posición 3 sin añadir ningún elemento')
/*Si deleteCount se omite, o si su valor es mayor que arr.length - start (esto significa, si es mayor que
  el número de elementos restantes del array, comenzando desde start), entonces todos los elementos desde 
  start hasta el final del array serán eliminados. */


const numbers = new Arroz;

numbers[0] = 100
numbers[1] = 200
numbers[2] = 300
numbers[3] = 400
numbers[4] = 500
numbers[5] = 600
numbers[6] = 700
numbers[7] = 800
numbers.length = 8

console.log('elementos eliminados del caso 3 -> ', numbers.splice(3, 6))
// [400, 500, 600, 700, 800]
console.log('objeto numbers después de eliminar elementos -> ', numbers)
// {0: 100, 1: 200, 2: 300, length: 3}

/*
Arroz { 0: 100, 1: 200, 2: 300, 3: 400, 4: 500, 5: 600, 6: 700, 7: 800, length: 8 } i = 8
Arroz { 0: 100, 1: 200, 2: 300, 3: 400, 4: 500, 5: 600, 6: 700, length: 7 } i = 7
Arroz { 0: 100, 1: 200, 2: 300, 3: 400, 4: 500, 5: 600, length: 6} i = 6
Arroz { 0: 100, 1: 200, 2: 300, 3: 400, 4: 500, length: 5} i = 5
Arroz { 0: 100, 1: 200, 2: 300, 3: 400, length: 4 } i = 4
Arroz { 0: 100, 1: 200, 2: 300, length: 3} i = 3
*/

