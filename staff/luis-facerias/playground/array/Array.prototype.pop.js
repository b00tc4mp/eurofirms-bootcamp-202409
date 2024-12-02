
// ARRAY.PROTOTYTPE.POP


// The pop method of the Array function,
// removes element from the end of the Array

console.log('TEST del método pop de una función Array')

// Test with array of strings
console.log('CASE delete last string from plants')

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
var plant = plants.pop()
console.log(plants)
// ['broccoli', 'cauliflower', 'cabbage', 'kale']
console.log(plant)
// tomato



// Test with array of objects
console.log('CASE extract last item from cart')

var socks = { brand: 'Adidas', size: 'L', price: 10 }
var tshirt = { brand: 'Nike', size: 'L', price: 20 }
var shoes = { brand: 'Puma', size: 44, price: 50 }
var cart = [socks, tshirt, shoes]
var extracted = cart.pop()
console.log(cart)

/*
[
    { brand: 'Adidas', size: 'L', price: 10 },
    { brand: 'Nike', size: 'L', price: 20 }
]
  */

console.log(extracted)
// { brand: 'Puma', size: 44, price: 50 }