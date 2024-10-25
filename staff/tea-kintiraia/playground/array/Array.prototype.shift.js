/*El método shift() elimina el primer elemento del array y lo 
retorna.Este método modifica la longitud del array*/

Array.prototype.shift()

console.log('TEST Array.prototype.shift');

var myCars = ['ford', 'BMW', 'Mercedes', 'Audi'];

console.log('myCars antes: ' + myCars);
var eliminado = myCars.shift();
console.log('myCars después: '+ myCars);
console.log('Elemento eliminado: ' +eliminado);
//eliminado: ford




var miPescado = ["ángel", "payaso", "mandarín", "cirujano"];

console.log("miPescado antes: " + miPescado);
// "miPescado antes: ángel,payaso,mandarín,cirujano"

var eliminado = miPescado.shift();

console.log("miPescado después: " + miPescado);
// "miPescado after: payaso,mandarín,cirujano"

console.log("Elemento eliminado: " + eliminado);
// "Elemento eliminado: ángel"


