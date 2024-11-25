var Arroz = function () { this.length = 0 }

Arroz.prototype.lastIndexOf = function (elementToSearch, fromIndex = this.length - 1) {
    //retorna el indice de la ultima ocurrencia de lo que  vamos a buscar -> elementToSearch <-
    //retorna -1 si no encontro
    //iterar sobre los valores para encontrar el resultado
    if (fromIndex < -this.length) {
        return -1
    } else {
        for (var i = this.length - 1; i >= fromIndex; i--) {
            if (this[i] === elementToSearch) {
                return i
            }
        }
    }
    //si fromIndex es mayor o igual que la longitud del arroz todo el arroz sera recorrido
    if (fromIndex >= this.length) {
        for (var i = this.length - 1; i >= 0; i--) {
            //comprobar si el valor de esta posicion -> this[i] <- es igual a lo que estamos buscando -> elementToSearch <-
            if (this[i] === elementToSearch) {
                return i
            }
        }
    }
    return -1
}

var comics = new Arroz

comics[0] = 'spiderman'

comics[1] = 'catwoman'

comics[2] = 'mortadelo y filemon'

comics[3] = 'batman'

comics[4] = 'zipi y zape'

comics[5] = 'dragon ball'

comics[6] = 'batman'

comics.length = 7

console.log('CASO 1 -> buscar el lastIndexOf de batman')

console.log('lastIndexOf batman ->', comics.lastIndexOf('batman'))
//6

console.log('CASO 2 -> buscar el de lastIndexOf batman desde la posicion -100')

console.log('lastIndexOf de batman desde la posicion -100 -> ', comics.lastIndexOf('batman', -100))
//-1

console.log('CASO 3 -> buscar el lastIndexOf de batman desde la posicion 3')

console.log('lastIndexOf de batman desde la posicion 3 -> ', comics.lastIndexOf('batman', 3))
//6

console.log('CASO 4 -> buscar el lastIndexOf de batman desde la posicion -6')

console.log('lastIndexOf de batman desde la posicion -6 -> ', comics.lastIndexOf('batman', -6))
//6