console.log('TEST Array.prototype.pop')

console.log('CASE extract tomato from plants')

var plants = ['brocoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
var plant = plants.pop()
console.log(plants)
// ['brocoli', 'cauliflower', 'cabagge', 'kale']
console.log(plant)
// tomate

console.log('CASE extract last item from cart')

var socks = { brand: 'Adidas', size: 'L', price: '10' }
var tshirt = { brand: 'Nike', size: 'L', prize: '20' }
var shoes = { brand: 'Puma', size: '44', prize: '30' }
var cart = [socks, tshirt, shoes]
var extracted = cart.pop()
console.log(cart)
/*
[
    { brand: 'Adidas', size: 'L', price: '10' }
    { brand: 'Nike', size: 'L', prize: '20' }
]
*/
console.log(extracted)
// { brand: 'Puma', size: '44', prize: '30' }