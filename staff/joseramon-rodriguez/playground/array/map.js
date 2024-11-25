var numbers = [0, 1, 2, 3]

var doubles = numbers.map(function (number) { return number * 2 })

console.log(numbers)

console.log('CASE 1 -> multiply numbers by 2')

console.log(doubles)

var halves = numbers.map(function (number) { return number / 2 })

console.log('CASE 2 -> divide numbers between 2')

console.log(halves)

console.log('CASE 3 -> sum 10 to each number', numbers.map(function (number) { return number + 10 }))

function callback(element) {
    return element - 10
}

console.log('CASE 4 -> substract 10 from each number', numbers.map(callback))

console.log('CASE 5 -> array of booleans checking if the numbers is less than 2', numbers.map(function (number) { return number < 2 }))

console.log('CASE 6 -> show all elements from array', numbers.map(function (number) { return number }))

console.log('CASE 7 -> array of undefined  because no value is returned from callback', numbers.map(function (number) { }))