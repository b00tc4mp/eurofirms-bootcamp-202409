console.log('TEST Array.prototype.indexOf')

console.log('CASE get index of bison')

var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
var index = beasts.indexOf('bison')
console.log(index);
// 1

console.log('CASE get index of bison starting at index 2')

var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
var index = beasts.indexOf('bison', 2)
console.log(index);
// 4

console.log('CASE get index of giraffe')

var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
var index = beasts.indexOf('giraffe')
console.log(index);
// -1

console.log('CASE get index of giraffe starting at offset -4')

var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
var index = beasts.indexOf('giraffe', -4)
console.log(index);
// -1

console.log('CASE get index of duck starting at offset -4')

var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
var index = beasts.indexOf('duck', -4)
console.log(index);
// 3

console.log('CASE get index of duck starting at offset -3')

var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
var index = beasts.indexOf('bison', -3)
console.log(index);
// 4

