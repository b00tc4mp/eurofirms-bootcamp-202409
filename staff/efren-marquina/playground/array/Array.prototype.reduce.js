console.log('TEST Array.prototype.reduce')

console.log('CASE extract total from cart')

var cart = [
    { brand: 'colgate', title: 'tooth paste', type: 'hygiene', quantity: 2, price: 3 },
    { brand: 'aldi', title: 'avena milk', type: 'food', quantity: 3, price: 1.2 },
    { brand: 'aldi', title: 'humus', type: 'food', quantity: 1, price: 2.5 },
    { brand: 'aldi', title: 'beans', type: 'food', quantity: 4, price: 2.1 }
]
var total = cart.reduce(function (total, item) {
    return total + item.quantity * item.price
}, 0)
console.log(total)
// 20.5

console.log('CASE extract total count hygiene and food products from cart')

var cart = [
    { brand: 'colgate', title: 'tooth paste', type: 'hygiene', quantity: 2, price: 3 },
    { brand: 'aldi', title: 'avena milk', type: 'food', quantity: 3, price: 1.2 },
    { brand: 'aldi', title: 'humus', type: 'food', quantity: 1, price: 2.5 },
    { brand: 'aldi', title: 'beans', type: 'food', quantity: 4, price: 2.1 }
]
var stats = cart.reduce(function (stats, item) {
    if (item.type === 'hygiene')
        stats.hygiene++
    else if (item.type === 'food')
        stats.food++

    return stats
}, { hygiene: 0, food: 0 })
console.log(stats)
// { hygiene: 1, food: 3 }

console.log('CASE sum all numbers')

var nums = [1, 43, 23, 67, 91, 85, 11, 31, 37]
var sum = nums.reduce(function (accum, num) {
    return accum + num
})
console.log(sum)
// 389