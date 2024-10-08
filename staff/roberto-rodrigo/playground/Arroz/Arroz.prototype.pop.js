var Arroz = function () { this.length = 0 }

Arroz.prototype.pop = function () {
    /*
    extract last element from arroz (reference in a local variable)
    delete last element from arroz
    decrement arroz length by 1
    return extracted element
    */

    var last = this[this.length - 1]
    delete this[this.length - 1]
    this.length-- // this.length = this.length - 1
    return last
}

console.log('CASE extract tomato from plants')

var plants = new Arroz
plants[0] = 'brocoli'
plants[1] = 'coliflower'
plants[2] = 'cabbage'
plants[3] = 'kale'
plants[4] = 'tomato'
plants.length = 5
var plant = plants.pop()
console.log(plants)
// Arroz {0: 'brocoli', 1: 'coliflower', 2: 'cabbage', 3: 'kale', length: 4 }
console.log(plant)
//tomato

console.log('CASE extract last item from cart')

var socks = { brand: ' Adidas', Size: 'L', price: 10 }
var tshirt = { brand: 'Nike', size: 'L', price: 20 }
var shoes = { brand: 'Puma', size: 44, prive: 50 }
var cart = new Arroz
cart[0] = socks
cart[1] = tshirt
cart[2] = shoes
cart.length = 3
var extracted = cart.pop()
console.log(cart)
/*
Arroz {
0: { brand: 'Adidas', size: 'L' price: 10 },
1: { brand: 'Nike', size: 'L', price: 20 },
length: 2
}
*/
console.log(extracted)
// { brand: 'puma', seze: 44, price: 50 }


