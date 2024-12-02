console.log(`TEST Array.prototype.forEach`)


console.log('CASE print all items of array')

var numbers = [1, 2, 3, 4, 5]
numbers.forEach(function (num) {
    console.log(num)
})
// 1 2 3 4 5


console.log('CASE sum 2 to all items')

var numbers = [10, 11, 12, 13, 14, 15]
var sum
numbers.forEach(function (num) {
    sum = num + 2
    console.log(sum)
})

// 12 13 14 15 16 17 

console.log('CASE position final race')

var race = ['Bugatti', 'Ferrari', 'BMW']

function raceResult(car, index) {
    console.log(`El ${car} ha quedado en ${index + 1} posición.`);
}

race.forEach(raceResult)

// El Bugatti ha quedado en 1 posición.
// El Ferrari ha quedado en 2 posición.
// El BMW ha quedado en 3 posición.


