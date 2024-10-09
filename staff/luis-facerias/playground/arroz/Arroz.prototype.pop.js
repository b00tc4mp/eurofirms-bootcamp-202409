
// ARROZ.PROTOTYTPE.POP


// Implementation of the Array function pop,
// to remove element from the end of an object

var Arroz = function() { this.length = 0 }

Arroz.prototype.pop = function () {
    var last = this[this.length - 1]
    delete this[this.length - 1]
    this.length--
    return last
}


// Test with a string array
console.log('TEST Arroz.prototype.pop')
console.log('CASE extract tomato from plants')

var plants = new Arroz
plants[0] = 'broccoli'
plants[1] = 'cauliflower'
plants[2] = 'cabbage'
plants[3] = 'kale'
plants[4] = 'tomato'
plants.length = 5
var plant = plants.pop()
console.log(plants)
// Arroz { '0': 'broccoli', '1': 'cauliflower', '2': 'cabbage', '3': 'kale', length: 4 }
console.log(plant)
// tomato


// Test with objects, extract last object from array
console.log('CASE extract last item from cart')

var socks = {brand: 'Adidas', size: 'L', price: 10}
var tshirt = {brand: 'Nike', size: 'M', price: 30}
var shoes = {brand: 'Puma', size: '50', price: 10}
var cart = new Arroz
cart[0] = socks
cart[1] = tshirt
cart[2] = shoes
cart.length = 3

var extracted = cart.pop()
console.log(cart)
/*
Arroz {
  '0': { brand: 'Adidas', size: 'L', price: 10 },
  '1': { brand: 'Nike', size: 'M', price: 30 },
  length: 2
}
/*
console.log(extracted)
// { brand: 'Puma', size: '50', price: 10 }


