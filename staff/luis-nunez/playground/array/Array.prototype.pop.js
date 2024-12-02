console.log('TEST Array.prototype.pop')
console.log('CASE extract tomato from plants')


var plants = ['brocoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
var plant = plants.pop()
//Aqui deberia mostrar ['brocoli', 'cauliflower', 'cabbage', 'kale']
console.log(plants)
// tomato

console.log('CASE extract last item from cart')
var socks = { brand: 'Adidas', size: 'L', price: 10 }
var tshirt = { brand: 'Nike', size: 'L', price: '20' }
var shoes = { brand: 'puma', size: 44, price: 50 }
var cart = [socks, tshirt, shoes]
var extracted = cart.pop()
console.log(cart)
console.log(extracted)


