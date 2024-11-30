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
        //tratar el start  en caso de que sea negativo  o  no se encuentre en la longitud del arroz

        let deletedElements = []

        if (start < 0) {
            start = this.length + start
        }
        if (start >= this.length) {
            start = this.length - 1
        }

        /*        if (start < 0 || start >= this.length) {
                   if (start < 0) {
                       if (elementsToAdd !== undefined) {
                           start = this.length + start
                           for (let i = start; i < (deleteAmount + start); i++) {
                               deletedElements.push(this[i])
                           }
                           this.length++
       
                           for (let i = this.length - 1; i > start; i--) {
                               this[i] = this[i - 1]
                               //for (let i = this.length - 1; i > start; i--) {
                               //  this[i] = this[i - 1]
                               //}
                           }
                           this[start] = elementsToAdd
       
                           for (let i = start + 1; i < this.length; i++) {
                               delete this[i]
                               this.length--
       
                           }
                           for (let i = start + 1; i < this.length; i++) {
                               this[i] = this[this.length + 1]
                               delete this[this.length + 1]
                           }
       
                       }
                   }
       
                   if (elementsToAdd === undefined) {
                       start = this.length + start
                       for (let i = start; i < this.length; i++) {
                           deletedElements.push(this[i])
                           delete this[i]
                           this.length--
                       }
                       for (let i = start; i < this.length; i++) {
                           this[i] = this[this.length]
                           delete this[this.length]
                       }
                   }
                   if (start >= this.length) {
                       start = this.length - 1
                   }
               }
       */

        // si existe un valor en deleteAmount, borrar los elementos que corresponden
        // si existe elementsToAdd, añadirlo en la posición que corresponda

        if ((deleteAmount <= 0) && elementsToAdd !== undefined) {

            for (let i = this.length - 1; i >= start; i--) {
                this[i + 1] = this[i]
            }
            this.length++
            this[start] = elementsToAdd
        }

        if ((deleteAmount <= 0) && elementsToAdd === undefined) {

            for (let i = this.length - 1; i >= start; i--) {
                this[i + 1] = this[i]
            }
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

            for (let i = this.length + start; i >= this.length; i--) {

                delete this[i]
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
//{0: 'Peter', 1: 'Constantin', 2: 'James', 3: 'Mario', 4: 'Tea', 5: 'Luis', length: 6}

console.log('CASO 3 -> eliminar 6 elementos desde la posición 3 sin añadir ningún elemento')
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

console.log('CASO 4 -> desde start: 2, borrar elementos ->undefined<- y no añadir elementos')

const cities = new Arroz;
cities[0] = 'Vigo'
cities[1] = 'Leon'
cities[2] = 'Avila'
cities[3] = 'Almeria'
cities[4] = 'Valencia'
cities[5] = 'Girona'
cities[6] = 'Alava'
cities.length = 7

console.log('elementos eliminados en el caso 4 -> ', cities.splice(2))
//['Avila', 'Almeria', 'Valencia', 'Girona', 'Alava']

console.log('objeto cities después de eliminar ->undefined<- elementos -> ', cities)
//Arroz {0: 'Vigo', 1: 'Leon', length: 2}

{
    console.log('CASO 5 -> eliminar -2 elementos y añadir "white" desde la posición 2')

    const colors = new Arroz;
    colors[0] = 'red'
    colors[1] = 'pink'
    colors[2] = 'blue'
    colors[3] = 'black'
    colors[4] = 'green'
    colors.length = 5

    console.log('elementos eliminados en el caso 5 -> ', colors.splice(2, -2, 'white'))
    //[]

    console.log('objeto colors después de eliminar -2 elementos y añadir white en la pos.2 -> ', colors)
    //Arroz {0: 'red', 1: 'pink', 2: 'white', 3: 'blue', 4: 'black', 5: 'green', length: 6}
}
{
    console.log('CASO 6 -> eliminar 1 elemento desde start -2, sin añadir nada')

    const colors = new Arroz;
    colors[0] = 'red'
    colors[1] = 'pink'
    colors[2] = 'blue'
    colors[3] = 'black'
    colors[4] = 'green'
    colors.length = 5
    console.log('elementos eliminados en el caso 6 -> ', colors.splice(-2, 1))
    //['black']

    console.log('objeto colors después de eliminar 1 elementos desde start: -2 y sin añadir nada -> ', colors)
    //Arroz {0: 'red', 1: 'pink', 2: 'blue', 3: 'green', length: 4}
}

{
    console.log('CASO 7 -> eliminar 2 elementos desde start -3, añadiendo white')

    const colors = new Arroz;
    colors[0] = 'red'
    colors[1] = 'pink'
    colors[2] = 'blue'
    colors[3] = 'black'
    colors[4] = 'green'
    colors.length = 5
    console.log('elementos eliminados en el caso 7 -> ', colors.splice(-3, 2, 'white'))
    //['blue', 'black']

    console.log('objeto colors después de eliminar 2 elementos desde start: -3 y añadir white en la pos.2 -> ', colors)
    //Arroz {0: 'red', 1: 'pink', 2: 'white', 3: 'green',  length: 4}

    //Arroz de inicio -> {0: 'red', 1: 'pink', 2: 'blue', 3: 'black', 4: 'green', length: 5}
    /*
    PASO 1.- situamos el inicio en start desde la longitud
    start = this.length(5) + start(-3) -> start = 2
    
    PASO 2.- copiamos en [] los elementos a eliminar:
    i=2, i<4 -> true ['blue']
    i=3, i<4 -> true ['blue', 'black']
    i=4, i<4 -> false -> stop
    
    PASO 3 .- añadimos 'white' al objeto desde el inicio modificado start: 2, modificando la
    longitud del objeto y copiando todos los elementos a su posición inmediatamente posterior
    
    i= 5, i>=3 -> true ->>>>>> i= 5, i>= 2 -> true ->
    {0: 'red', 1: 'pink', 2:'blue', 3: 'black', 4: 'green', length: 6}
    {0: 'red', 1: 'pink', 2:'blue', 3: 'black', 4: 'green', 5: 'green', length: 6}
    
    i= 4, i>=3 -> true ->>>>>> i= 4, i>= 2 -> true ->
    {0: 'red', 1: 'pink', 2:'blue', 3: 'black', 4: 'black', 5: 'green', length: 6}
    
    i= 3, i>=3 -> true ->>>>>> i=3, i>= 2 -> true ->
    {0: 'red', 1: 'pink', 2:'blue', 3: 'blue', 4: 'black', 5: 'green', length: 6}
    
    i= 2, i>=3 -> false -> stop
    {0: 'red', 1: 'pink', 2:'white', 3: 'blue', 4: 'black', 5: 'green', length: 6}
    
    PASO 4.- eliminamos 2 elementos desde el inicio modificado start: 2 y adaptamos length a la longitud del objeto:
    
    i = 3, i<  -> true ->
    {0: 'red', 1: 'pink', 2: 'white', 4: 'black', 5: 'green', length: 5}
    
    i= 4, i<  -> true ->
    {0: 'red', 1: 'pink', 2: 'white', 5: 'green', length: 4}
    
    i= 5, i< -> false ->stop
    
    PASO 4.- modificamos la posición de todos los objetos desde start+1 con nº consecutivo
    
    EXPECTED OUTPUT ->>> Arroz {0: 'red', 1: 'pink', 2: 'white', 3: 'green',  length: 4}
    
    */




}