console.log('TEST Arroz.prototype.lastIndexOf')

/* El método lastIndexOf() devuelve el último índice en el que un cierto elemento
puede encontrarse en el arreglo, ó -1 si el elemento no se encontrara.
El arreglo es recorrido en sentido contrario, empezando por el índice fromIndex.*/

class Arroz {
    constructor() { this.length = 0 }

    lastIndexOf(elementTosearch) {
        // debe recorrer la arroz elemento a elemento
        // comprobar la última posición -> index <- de cada elemento
        // devolver la posición -> index <-
        // devolver -1 si no hay elemento

        for (let i = this.length; i >= 0; i--) {
            if (this[i] === elementTosearch)
                return i
        }
        return -1

    }
}

const cities = new Arroz();
cities[0] = 'Vigo'
cities[1] = 'Madrid'
cities[2] = 'Barcelona'
cities[3] = 'A Coruña'
cities[4] = 'Leon'
cities[5] = 'Barcelona'
cities[6] = 'Vigo'
cities.length = 7

console.log('CASE 1 -> last index of cities: Barcelona')
{
    const lastIndexOfBarcelona = cities.lastIndexOf('Barcelona')

    console.log('The last index of Barcelona is -> ', lastIndexOfBarcelona)
    // 5
}

console.log('CASE 2 -> last index of cities: Vigo')
{
    const lastIndexOfVigo = cities.lastIndexOf('Vigo')

    console.log('The last index of Vigo is -> ', lastIndexOfVigo)
    // 6
}

console.log('CASE 3 -> last index of cities not found: Oviedo')

{
    const lastIndexOfOviedo = cities.lastIndexOf('Oviedo')

    console.log('The last index of Oviedo is -> ', lastIndexOfOviedo)
    // -1 -> no hay ningún elemento con ese nombre
}