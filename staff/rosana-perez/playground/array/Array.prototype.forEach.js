console.log('TEST Array.prototype.forEach')

console.log('CASE 1: multiply each number by self and print it')

var nums = [1, 2, 3, 4, 5, 6]

nums.forEach(function (num) {
    var result = num * num

    console.log(result)
})

//node --inspect-brk staff/rosana-perez/playground/array/Array.prototype.forEach.js -> llamada a debugger desde terminal
// desconectar de debugger -> ctrl + c
// también debugamos con ctrl+a y ctrol+c, copiamos código, vamos al inspector
// del navegador, en source, snipets y pegar código. debugger.


console.log('CASE 2: add 10 to each number')

var nums = [1, 2, 3, 4, 5, 6]

nums.forEach(function (num) {
    var result = num + 10
    console.log(result)
})
// expected output -> 11, 12, 13, 14, 15, 16


console.log('CASE 3: add all numbers')

var nums = [1, 2, 3, 4, 5, 6]

var result = 0

nums.forEach(function (num) {
    //result = result + num, es igual que:
    result += num

})

console.log(result)
// expected output -> 21

