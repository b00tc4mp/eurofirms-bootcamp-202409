console.log('TEST Array.prototype.slice')

console.log('CASE return a part of the array')

var fruits = ['Orange', 'Pear', 'Melon', 'Mango', 'Peach', 'Grapes', 'Lemon']
var slicedFruits = fruits.slice(1, 5)
console.log(slicedFruits)
// [ 'Pear', 'Melon', 'Mango', 'Peach' ]

console.log('CASE return a negative part of the array')

var fruits = ['Orange', 'Pear', 'Melon', 'Mango', 'Peach', 'Grapes', 'Lemon']
var slicedFruits = fruits.slice(-3)
console.log(slicedFruits)
//[ 'Lemon', 'Grapes', 'Peach' ]

console.log('CASE return the two-dimensional array')

var fruits = [
    ['Orange', 'Pear', 'Melon'],
    ['Mango', 'Peach'],
    ['Grapes', 'Lemon']
]

var slicedFruits = fruits.slice(1, 2)
console.log(slicedFruits)
// [ 'Mango', 'Peach' ]

console.log('CASE return the negative two-dimensional array')

var fruits = [
    ['Orange', 'Pear'],
    ['Melon', 'Mango'],
    ['Peach', 'Grapes'],
    ['Lemon']
]
var slicedFruits = fruits.slice(-1)
console.log(slicedFruits)
// [ 'Lemon' ]