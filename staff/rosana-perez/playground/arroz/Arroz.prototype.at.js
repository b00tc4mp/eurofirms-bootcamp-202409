console.log('TEST Arroz.prototype.at')

class Arroz {
    constructor() {
        this.length = 0
    }

    //dando una posición devuelvo el valor de la propiedad -> posicion <-
    at(position) {
        //devuelvo el valor de la propiedad ->position<-
        let positionToSearch = 0
        // se usa let y no const porque la variable es susceptible de cambio

        if (position >= 0)
            positionToSearch = Math.floor(position)
        else
            positionToSearch = Math.round(position)

        if (positionToSearch >= 0)
            return this[positionToSearch]
        else
            //el último elemento está en this[this.length-1]
            return this[positionToSearch + this.length]
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

console.log('colección de películas ->', movies)

console.log('CASO 1: encontrar la película en la posición 3')

console.log('película en la posición 3 ->', movies.at(3))
//expected result = 'men in black'

console.log('CASO 2: encontrar la película en la posición -3')

console.log('película en la posición -3 ->', movies.at(-3))
//expected result = 'el guardaespaldas'

console.log('CASO 3: encontrar la película en la posición -666')

console.log('película en la posición -666', movies.at(-666))
//expected result = 'undefined'

console.log('CASO 4: encontrar la película en la posición 666')

console.log('película en la posición 666->', movies.at(666))
//expected result = 'undefined'

console.log('CASO 5: encontrar la película en la posición 1.5')

console.log('película en la posición 1.5->', movies.at(1.5))
//expected result = 'vacaciones en roma'

console.log('CASO 6: encontrar la película en la posición -1.5')

console.log('película en la posición -1.5 ->', movies.at(-1, 5))
//expected result: 'WIP'
