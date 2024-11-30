/* 
array.fill
  cambia todos los elementos en un arreglo por un valor estático, desde 
  el índice start (por defecto 0) hasta el índice end (por defecto array.length)

  devuelve el arreglo modificado
  */

var seaFish = ['necora', 'pota', 'lenguado', 'rodaballo', 'merluza']

console.log('lista seaFish antes de fill -> ', seaFish)
//expected result -> ['necora', 'pota', 'lenguado', 'rodaballo', 'merluza']

console.log('CASO 1: cambiar por "peixe" todos los valores a partir de la posición 2')

var value = 'peixe'
console.log('sustituir valores por "peixe" a partir de "pota"->', seaFish.fill(value, 2)) // código extendido: seaFish.fill(value, 2, seaFish.length)
//expected result -> ['necora', 'pota', 'peixe', 'peixe', 'peixe']


console.log('CASO 2: cambiar por "peixeRico" todos los valores a partir de la posición 3')
var seaFish = ['necora', 'pota', 'lenguado', 'rodaballo', 'merluza']
var value = 'peixeRico'

console.log('sustituir valores por "peixeRico" a partir de lenguado ->', seaFish.fill(value, 3))
//expected result -> ['necora', 'pota', 'lenguado', 'peixeRico', 'peixeRico']


console.log('CASO 3: cambiar por peixeDeRia todos los valores entre la posición 1 y la 4')
var seaFish = ['necora', 'pota', 'lenguado', 'rodaballo', 'merluza']
var value = 'peixeDeRia'

console.log('sustituir valores desde pota y hasta rodaballo por peixeDeRia->', seaFish.fill(value, 1, 4))
//expected result-> ['necora', 'peixeDeRia', 'peixeDeRia', 'peixeDeRia', 'merluza']


console.log('CASO 4: cambiar por peixe todos los valores entre la posición -1 y la -4')
var seaFish = ['necora', 'pota', 'lenguado', 'rodaballo', 'merluza']
var value = 'peixe'

console.log('sustituir valores desde pota y hasta rodaballo por peixe utilizando posiciones negativas->', seaFish.fill(value, -4, -1))
//expected result-> [ 'necora', 'peixe', 'peixe', 'peixe', 'merluza' ]

console.log('CASO 5: cambiar por peixeDeRia todos los valores entre la posición -1 y la 3')
var seaFish = ['necora', 'pota', 'lenguado', 'rodaballo', 'merluza']
var value = 'peixeDeRia'

console.log('sustituir valores desde rodaballo y hasta merluza por peixeDeRia utilizando hibridos posiciones - y + ->', seaFish.fill(value, 3, -1))
//expected result-> [ 'necora', 'pota', 'lenguado', 'peixeDeRia', 'merluza' ]

console.log('CASO 6: Dias de la semana')

var weekDays = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
var value = 'fiesta'

console.log('6.1-> sustituir viernes por fiesta ->', weekDays.fill(value, 4, 5))
// ['lunes', 'martes', 'miercoles', 'jueves', 'fiesta', 'sabado', 'domingo']
var weekDays = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']

console.log('6.2-> sustituir viernes y sabado por fiesta ->', weekDays.fill(value, 4, 6))
//['lunes', 'martes', 'miercoles', 'jueves', 'fiesta', 'fiesta', 'domingo']

var weekDays = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']

console.log('6.3-> sustituir viernes y sabado por fiesta utilizando posiciones - ->', weekDays.fill(value, -3, -1))
//['lunes', 'martes', 'miercoles', 'jueves', 'fiesta', 'fiesta', 'domingo']

var weekDays = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']

console.log('6.4-> sustituir viernes y sabado por fiesta con posiciones + y - ->', weekDays.fill(value, 4, -1))
//['lunes', 'martes', 'miercoles', 'jueves', 'fiesta', 'fiesta', 'domingo']

var weekDays = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']

console.log('6.5-> sustituir viernes y sabado por fiesta utilizando posiciones - y + ->', weekDays.fill(value, -3, 6))
//['lunes', 'martes', 'miercoles', 'jueves', 'fiesta', 'fiesta', 'domingo']

/* EN TODOS LOS CASOS 1 A 6, HAY QUE REINICIAR LA ARRAY AL VALOR INICIAL, PORQUE LA FUNCIÓN CAMBIA LA ARRAY Y LA DEVUELVE.
ES DECIR, SI NO LA REINICIAMOS EL PUNTO DE PARTIDA DE LA ARRAY ES EL CASO ANTERIOR, MODIFICADO, PORQUE GUARDA LA ARRAY CAMBIADA. */