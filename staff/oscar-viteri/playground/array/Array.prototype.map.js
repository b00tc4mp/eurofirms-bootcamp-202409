var numbers = [0, 1, 2, 3]
var doubles = numbers.map(function (number) {
    return number * 2
})

console.log(numbers)

console.log('CASE 1 -> multiply numbers by 2')
console.log(doubles)
// [ 0, 2, 4, 6 ]

var halves = numbers.map(function (number) {
    return number / 2
})

console.log('CASE 2 -> divide numbers between 2')

console.log(halves)
// [ 0, 0.5, 1, 1.5 ]

console.log('CASE 3 -> sum 10 to each number', numbers.map(function (number) {
    return number + 10
}))
//[ 10, 11, 12, 13 ]

function callback(element) {
    return element - 10
}

console.log('CASE 4 -> substract 10 from each number', numbers.map(callback))
//[-10, -9, -8, -7 ]

console.log('CASE 5 -> array of booleans checking if the numbers is less than 2', numbers.map(function (number) {
    return number < 2
}))
//[ true, true, false, false ]

console.log('CASE 6 -> show all elements from array', numbers.map(function (number) {
    return number
}))
//[ 0, 1, 2, 3 ]

console.log('CASE 7 -> array of undefined because no value is returned from callback', numbers.map(function (number) {
}))
// [ undefined, undefined, undefined, undifined ]