var Arroz = function () { this.length = 0 }

//dando una posicion devuelvo el valor de la propiedad ->posicion<-
Arroz.prototype.at = function (position) {
    //devuelvo el valor de la propiedad ->position<-
    var positionToSearch = 0

    if (position >= 0)
        positionToSearch = Math.floor(position)
    else
        positionToSearch = Math.round(position)

    if (positionToSearch >= 0)
        return this[positionToSearch]
    else
        //el ultimo elemento esta en this[this.length - 1]
        return this[positionToSearch + this.length]
}

var movies = new Arroz

movies[0] = 'karate kid'

movies[1] = 'vacaciones en roma'

movies[2] = 'seven'

movies[3] = 'men in black'

movies[4] = 'forrest gump'

movies[5] = 'el guardaespaldas'

movies[6] = 'interstellar'

movies[7] = 'WIP'

movies.length = 8

console.log('coleccion de peliculas ->', movies)

console.log('CASO 1: encontar la pelicula en la posicion 3')

console.log('pelicula en la posicion 3 ->', movies.at(3))
//men in black

console.log('CASO 2: encontrar la pelicula en la posicion -3')

console.log('pelicula en la posicion -3 ->', movies.at(-3))
//el guardaespaldas

console.log('CASO 3: encontrar la pelicula en la posicion -666')

console.log('pelicula en la posicion -666', movies.at(-666))
//undefined

console.log('CASO 4: encontrar la pelicula en la posicion 666')

console.log('pelicula en la posicion 666', movies.at(666))
//undefined

console.log('CASO 5: encontrar la pelicula en la posicion 1.5')

console.log('pelicula en la posicion 1.5 -> ', movies.at(1.5))
//vacaciones en roma

console.log('CASO 6: encontrar la pelicula en la posicion -1.5')

console.log('pelicula en la posicion -1.5 -> ', movies.at(-1.5))
//WIP