var Arroz = function () { this.length = 0 }

//eliminar el ultimo elemento y devolverlo. Cambia la longitud del array
Arroz.prototype.pop = function () {
    //guardar el ultimo elemento antes de eliminarlo
    var result = this[this.length - 1]

    //elmino el ultimo elemento
    delete this[this.length - 1]

    //cambio la longitud del Arroz
    this.length--

    //devuelvo el elemento elminado porque antes me lo guarde
    return result
}

var sports = new Arroz

sports[0] = 'football'

sports[1] = 'basketball'

sports[2] = 'F1'

sports.length = 3

console.log('CASO 1: eliminar el ultimo elemento de sports ->F1<-')

console.log('sports -> ', sports)

console.log('ultimo elemento elminiado de sports ', sports.pop())

console.log('sports despues del pop ->', sports)