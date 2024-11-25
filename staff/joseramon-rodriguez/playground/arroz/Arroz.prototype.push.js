function Arroz() {
    length = 0
}

Arroz.prototype.push = function (element) {
    //añadir un elemento -> element <- al final de Arroz -> this.length <-
    this[this.length] = element

    this.length++
}

var numbers = new Arroz

numbers[0] = 0

numbers[1] = 1

numbers[2] = 2

numbers.length = 3

console.log('numbers  -> ', numbers)

console.log('CASO 1: añadir 3 a numbers')
//{0: 0, 1: 1, 2: 2, 3: 3, length: 4}

numbers.push(3)

console.log('numbers despues de añadir 3 ->', numbers)