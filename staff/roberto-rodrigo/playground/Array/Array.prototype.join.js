console.log('CASE Array.prototype.join')

console.log('CASE unir medios de trnasporte sin parametro ()')


var medios = ['barco', 'avion', 'taxi', 'tren', 'autobus']
console.log(medios.join())
// barco,avion,taxi,tren,autobus


console.log('CASE unir medios de transporte con el parametro ("") ')

var medios = ['barco', 'avion', 'taxi', 'tren', 'autobus']
console.log(medios.join(''))
// arcoaviontaxitrenautobus

console.log('CASE unir medios de transporte con el parametro (" ") ')

var medios = ['barco', 'avion', 'taxi', 'tren', 'autobus']
console.log(medios.join(' '))
// barco avion taxi tren autobus

