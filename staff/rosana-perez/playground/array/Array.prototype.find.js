console.log('TEST Array.prototype.find')

console.log('CASE 1: find first name length greater than 5')

var names = [
    'Peter',
    'John',
    'Max',
    'James',
    'Constantin',
    'Mario',
    'Tea',
    'Luis'
]

var name = names.find(function (name) {
    return name.length > 5
})

console.log(name)


console.log('CASE 2: find a name with the character X')

var names = [
    'Peter',
    'John',
    'Max',
    'James',
    'Constantin',
    'Mario',
    'Tea',
    'Luis'
]

var name = names.find(function (name) {
    return name.includes('x')
})

console.log(name)

//Max


console.log('CASE 3: find first item with type socks')

var cart = [
    { brand: 'adidas', type: 'shoes', quantity: 1, price: 75 },
    { brand: 'puma', type: 'shorts', quantity: 2, price: 25 },
    { brand: 'nike', type: 'socks', quantity: 4, price: 10 },
    { brand: 'decathlon', type: 'socks', quantity: 2, price: 4 }

]

var item = cart.find(function (item) {
    return item.type === 'socks'
})
console.log(item)

//  { brand: 'nike', type: 'socks', quantity: 4, price: 10 }



console.log('CASE 4: find first item with total price greater than 100')

var cart = [
    { brand: 'adidas', type: 'shoes', quantity: 1, price: 75 },
    { brand: 'puma', type: 'shorts', quantity: 2, price: 25 },
    { brand: 'nike', type: 'socks', quantity: 4, price: 10 },
    { brand: 'decathlon', type: 'socks', quantity: 2, price: 4 }

]

var item = cart.find(function (item) {
    return item.price * item.quantity > 100
})
console.log(item)

// expected output -> undefined, (no hay ninguno)


console.log('CASE 5: find first item with total price is greater than 40 and lower than  70')

var cart = [
    { brand: 'adidas', type: 'shoes', quantity: 1, price: 75 },
    { brand: 'puma', type: 'shorts', quantity: 2, price: 25 },
    { brand: 'nike', type: 'socks', quantity: 4, price: 10 },
    { brand: 'decathlon', type: 'socks', quantity: 2, price: 4 }

]

var item = cart.find(function (item) {
    var totalPrice = item.price * item.quantity

    return totalPrice > 40 && totalPrice < 70
})
console.log(item)

//expected output -> { brand: 'puma', type: 'shorts', quantity: 2, price: 25 }


console.log('CASE 6: find first item with total price is greater than 5 and unit price lower than 5')

var cart = [
    { brand: 'adidas', type: 'shoes', quantity: 1, price: 75 },
    { brand: 'puma', type: 'shorts', quantity: 2, price: 25 },
    { brand: 'nike', type: 'socks', quantity: 4, price: 10 },
    { brand: 'decathlon', type: 'socks', quantity: 2, price: 4 }

]

var item = cart.find(function (item) {
    var totalPrice = item.price * item.quantity

    return totalPrice > 5 && item.price < 5
})
console.log(item)

// { brand: 'decathlon', type: 'socks', quantity: 2, price: 4 }

