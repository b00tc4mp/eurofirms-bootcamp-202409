var Arroz = function () { this.length = 0 }

//funciones

Arroz.prototype.paraOscar = function () {
    for (i = 0; i < this.length; i++) {
        console.log('i vale ' + i)
        console.log('El valor actual es ' + this[i] + ' y el valor que tenemos que ponerle es ' + this[i + 1])
        this[i] = this[i + 1]
    }
}

//Declaración y creación del objeto numbers

var numbers = new Arroz
numbers[0] = 3
numbers[1] = 1
numbers[2] = 2
numbers[3] = 5
numbers[4] = 1
numbers.length = 5

//llamadas

console.log('CASO PARA OSCAR -> Ejemplo del funcionamiento del FOR, con valor de i, y de THIS ')

console.log(numbers.paraOscar())
