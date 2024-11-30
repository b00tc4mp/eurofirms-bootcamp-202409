console.log('TEST Array.prototype.pop')

console.log('CASE extract tomato from plants')

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
var plant = plants.pop()
console.log(plants)
// expected result ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
console.log(plant)
// expected result ->  tomato

console.log('CASE extract last item from cart')

var socks = { brand: 'Adidas', size: 'L', price: 10 }
var tshirt = { brand: 'Nike', size: 'L', price: 20 }
var shoes = { brand: 'Puma', size: 44, price: 50 }
var cart = [socks, tshirt, shoes]
var extracted = cart.pop()
console.log(cart)
/* expected result
[
    { brand: 'Adidas', size: 'L', price: 10 }
    { brand: 'Nike', size: 'L', price: 20 }
]
*/
console.log(extracted)
// expected result -> { brand: 'Puma', size: 44, price: 50 }