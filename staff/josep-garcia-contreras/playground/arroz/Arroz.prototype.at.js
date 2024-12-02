var Arroz = function() {
    this.length = 0
}

Arroz.prototype.at = function(index) {
    if (index >= 0) {
        return this[index]
        
    } else {
        return this[this.length +index]        
    }

}

console.log('TEST Arroz.prototype.at')

console.log('CASE get element at index 2')

var things = new Arroz 
things[0] = 100
things[1] = true
things[2] = 'Hola mundo'
things[3] = {a:1, b:2, c:3}
things[4] = null
things[5] = undefined
things[6] = function() {return 'hello world'}
things.length = 7

var element = things.at(2)
console.log(element)
// Nos devuelve el valor 2 -> Hola mundo

var element = things.at(-1)
console.log(element)

// Nos devuelve el valor 6-> function() {return 'hello world'}
console.log(element())
//Nos devuelve el valor de 6 y lo ejecutamos e imprime hello world